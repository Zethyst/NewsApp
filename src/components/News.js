import React, { Component } from 'react'
import NewItem from './NewItem'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from './Skeleton';
import SignatureFooter from './SignatureFooter';
//   GET https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=183d2c5864504ce0bfa355cf205526bd

export class News extends Component {

 

  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
    query: ''
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    query: PropTypes.string
  }


  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
  }

  async updateNews() {

    this.props.setProgress(10);
    try {
      const response = await fetch("/api/news"); // Fetch data from your Express server
      const data = await response.json();
  
      this.props.setProgress(70);
      this.setState({
        articles: data.articles,
        totalResults: data.totalResults,
        loading: false
      });
      this.props.setProgress(100);
    } catch (error) {
      console.error("Failed to fetch news data:", error);
    }
  }

  async componentDidMount() {
    setTimeout(() => {
      this.updateNews();
    }, 1500);
    document.title = `${this.capitalize(this.props.category)} - NewsRadar`;
  }
  async fetchMoreData() {
    // this.props.setProgress(10);
  
    const { page, pageSize, category, query, country } = this.props;
  
    try {
      const response = await fetch(`/api/more-news?page=${page + 1}&pageSize=${pageSize}&category=${category}&query=${query}&country=${country}`);
      const data = await response.json();
  
      // this.props.setProgress(70);
      this.setState((prevState) => ({
        articles: [...prevState.articles, ...data.articles], // Concatenating new items to previous items
        totalResults: data.totalResults,
        page: prevState.page + 1,
      }));
      // this.props.setProgress(100);
    } catch (error) {
      console.error("Failed to fetch more news data:", error);
    }
  }
  // handleReq = async (event) => {
  //   let p = event.currentTarget.textContent;
  //   // event.target.classList.add('activePage');
  //   let pnum = Number.parseInt(p);
  //   let url = `https://newsapi.org/v2/top-headlines?q=${this.props.query}&country=${this.props.country}&category=${this.props.category}&apiKey=183d2c5864504ce0bfa355cf205526bd&page=${p}&pageSize=${this.props.pageSize}`
  //   let response = await fetch(url);
  //   this.setState({ loading: true });
  //   let data = await response.json();
  //   this.setState({
  //     page: pnum,
  //     articles: data.articles,
  //     loading: false
  //   })
  // }
  // handlePrev = async () => {
  //   this.setState({
  //     page: this.state.page - 1
  //   })
  //   this.updateNews();
  // }

  // handleNext = async () => {
  //   if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
  //     this.setState({
  //       page: this.state.page + 1
  //     })
  //     this.updateNews();
  //   }
  // }
  async componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      await this.updateNews();
    }
  }
  renderSkeletons = () => {
    if (window.innerWidth <= 768) {
      return (<Skeleton />);
    } else {
      return (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      );
    }
  };
  // fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`)
  render() {
    return (
      <div className='relative'>
        <div className="-my-1  overflow-hidden min-h-[87vh] pb-20">
          <h1 className='text-2xl font-bold text-center mx-2'>NewsRadar - Top {this.capitalize(this.props.category)} Headlines</h1>
          {this.state.loading && (
          <div className="flex justify-center space-x-32 mx-4 my-4 w-[full]">
            {this.renderSkeletons()}
          </div>
        )}
          <InfiniteScroll className='overflow-hidden'
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length <= this.state.totalResults - 5}
            loader={
              <div className="flex justify-center ml-4">
                <div className='space-x-32 my-4 w-[full] md:w-[64rem] row overflow-hidden'>
                  {this.renderSkeletons()}
                </div>
            </div>
              }
            endMessage={(this.state.articles.length > 15) &&
              <p style={{ textAlign: 'center', marginBottom: "15px" }}>
                <b>That's all the news for now.</b>
              </p>
            }
          >
            {/* {To solve the problem of horizontal scrollbar} */}
            <div className="flex justify-center ml-4">

              <div className="w-[24rem] md:w-[70rem] row overflow-hidden">
                {!this.state.loading && this.state.articles?.map((element) => {
                  return <div className="col-md-4" key={element.url}>
                    <NewItem title={element.title} description={element.description} imageURL={element.urlToImage} newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                  </div>
                })}
              </div>
            </div>
          </InfiniteScroll>
          {/* <div className="text-center my-4">
            <div className="pagination">
              <a href="#" title='previous page' className={this.state.page <= 1 ? 'disable' : ''} onClick={this.handlePrev}>&laquo;</a>
              <a href="#" className={this.state.page === 1 ? 'activePage' : ''} onClick={this.handleReq}>1</a>
              <a href="#" className={this.state.page === 2 ? 'activePage' : ''} onClick={this.handleReq}>2</a>
              <a href="#" className={this.state.page === 3 ? 'activePage' : ''} onClick={this.handleReq}>3</a>
              <a href="#" className={this.state.page === 4 ? 'activePage' : ''} onClick={this.handleReq}>4</a>
              <a href="#" className={this.state.page === 5 ? 'activePage' : ''} onClick={this.handleReq}>5</a>
              <a href="#" className={Math.ceil(this.state.totalResults / this.props.pageSize) < 6 ? 'hidden' : ''} onClick={this.handleReq}>6</a>
              <a href="#" title='next page' className={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize) ? 'disable' : ''} onClick={this.handleNext}>&raquo;</a>
            </div>
          </div> */}
        </div>
        <SignatureFooter/>
      </div>
    )
  }
}

export default News