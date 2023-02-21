import React from 'react';

const Landing = (props) => {

    return (
        <div>
            {/* start rt-sidebar-section-layout-1 */}

            <section className="rt-sidebar-section-layout-1">
                <div className="container">
                    <div className="row gutter-40 sticky-coloum-wrap">
                        <div className="col-md-12 col-xs-12 sticky-coloum-item">
                            <div className="rt-left-sidebar-sapcer-5 sticky-wrap">
                                <div className="wrap post-wrap-style-3">
                                    {props.supportingData.loading &&
                                        <div className="text-center">
                                            <i style={{fontSize:'40px',lineHeight:'40px',color:'#0a58ca'}} className="fas fa-spinner fa-pulse"></i>
                                        </div>
                                    }
                                    {props.supportingData.serverError &&
                                    <div className="text-center">
                                        <span style={{fontSize:'40px',lineHeight:'40px',color:'#0a58ca'}}>{props.supportingData.serverError}</span>
                                    </div>
                                    }
                                    {props.articles.map((article,index) => (
                                        <div key={index} className="post-item wow fadeInUp" data-wow-delay="100ms" data-wow-duration="800ms">
                                            <div className="rt-post post-md style-2 style-4  grid-meta">
                                                <div className="post-img">
                                                    <a target="_blank" href={article.url}>
                                                        <img src={article.urlToImage} alt="post" width={696} height={491} />
                                                    </a>
                                                </div>
                                                <div className="post-content">
                                                    <span className="action">{article.source.name}</span>
                                                    <h3 className="post-title">
                                                        <a target="_blank" href={article.url}>
                                                            {article.title}
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        {article.description}
                                                    </p>
                                                    <div className="post-meta">
                                                        <ul>
                                                            <li>
                                                                <span className="rt-meta">
                                                                  by <span className="name">{article.author}</span>
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="rt-meta">
                                                                  <i className="far fa-calendar-alt icon" />
                                                                    {article.publishedAt}
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="btn-wrap mt--25">
                                                        <a target="_blank" href={article.url} className="rt-read-more rt-button-animation-out">
                                                            Read More
                                                            <svg width="34px" height="16px" viewBox="0 0 34.53 16" xmlSpace="preserve">
                                                                <rect className="rt-button-line" y="7.6" width={34} height=".4">
                                                                </rect>
                                                                <g className="rt-button-cap-fake">
                                                                    <path className="rt-button-cap" d="M25.83.7l.7-.7,8,8-.7.71Zm0,14.6,8-8,.71.71-8,8Z" />
                                                                </g>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* end rt-left-sidebar-sapcer-5 */}
                        </div>
                    </div>
                    {/* end row  */}
                </div>
                {/* end container */}
            </section>
            {/* end rt-sidebar-section-layout-1 */}
        </div>
    );


}

export default Landing;
