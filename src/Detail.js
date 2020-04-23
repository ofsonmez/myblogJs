import React from "react";
import { items } from "./static-data";
import ErrorBoundary from "./ErrorBoundaries";

class Details extends React.Component {
  state = { loading: true };

  componentDidMount() {
    // throw new error("lol");
    items.map((item) => {
      if (this.props.id == item.id) {
        this.setState({
          name: item.title,
          subname: item.subtitle,
          description: item.description,
          loading: false,
        });
      }
    }, console.error);
  }

  render() {
    if (this.state.loading) {
      return <h1>loading ...</h1>;
    }

    const { name, subname, description } = this.state;

    return (
      <React.Fragment>
        <header>
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="post-heading">
                  <h1>{name}</h1>
                  <h2> </h2>
                  <h4 className="subheading">{subname}</h4>
                  <span className="meta">Posted by Author</span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <article>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </article>
      </React.Fragment>
    );
  }
}

export default function DetailsWthErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
