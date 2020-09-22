import axios from 'axios';
import API from '@api';

const DEFAULT_LIMIT = 10;

function parseLink(s) {
  const output = {};
  const regex = /<([^>]+)>; rel="([^"]+)"/g;

  let m = regex.exec(s);
  while (m) {
    const [, v, k] = m;
    output[k] = v;
    m = regex.exec(s);
  }

  return output;
}

class APIPaginationHelper extends API {
  constructor(props) {
    super(props);

    this.props = {
      itemsExtractor: res => res.data,
      ...props
    };

    this.source = axios.CancelToken.source();
  }

  async load(url, data) {
    console.log('load');
    const isLoadMore = !url;
    let params = {};

    if (!isLoadMore) {
      this.originalUrl = url;
      this.previousUrl = url;

      params = {
        page: 1,
        per_page: DEFAULT_LIMIT,
        ...data
      };
    }

    try {
      this.source.cancel('Operation canceled due to new request.');
      // save the new request for cancellation
      this.source = axios.CancelToken.source();

      const response = await this.get(this.previousUrl, {
        params,
        cancelToken: this.source.token
      });

      const responseItems = this.props.itemsExtractor(response);

      const newResponse = isLoadMore ? this.previousResponse.concat(responseItems): responseItems;

      this.links = parseLink(response.headers.link);
      this.hasNextPage = !!this.links.next;

      this.previousResponse = newResponse;

      this.props.success(newResponse);
    } catch (error) {
      const hasCanceled = !this.source.token.reason;

      if (hasCanceled) return;
      if (this.props.error) this.props.error(error);
    }
  }

  loadNextPage() {
    if (this.hasNextPage) {
      this.previousUrl = this.links.next;
      this.load();
    }
  }
}

export default APIPaginationHelper;
