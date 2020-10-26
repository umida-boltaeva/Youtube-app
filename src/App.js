import React from "react";
import SearchList from "./components/SearchList";
import Youtube from "./APIs/Youtube";
import VideoPlayer from "./components/VideoPlayer";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  handleSubmit = async (termFromSearchList) => {
    const response = await Youtube.get("/search", {
      params: {
        q: termFromSearchList,
      },
    });

    this.setState({
      videos: response.data.items,
    });
    console.log("this is resp", response);
  };
  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1em" }}>
        <SearchList handleFormSubmit={this.handleSubmit} />
        <div
          className="ui grid"
          handleVideoSelect={this.handleVideoSelect}
          videos={this.state.videos}
        >
          <div className="ui row">
            <div className="eleven wide column">
              <VideoPlayer video={this.state.selectedVideo} />
            </div>
            <div className="five wide column"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
