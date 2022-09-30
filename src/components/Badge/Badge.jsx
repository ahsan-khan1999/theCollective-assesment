import React, { PureComponent } from "react";
import "./main.css";

export default class LanguageBadge extends PureComponent {
  componentWillMount() {
    const { files } = this.props;
    this.filteredLanguage = [];

    for (let file in files) {
      let language = files[file].language;
      if (this.filteredLanguage.indexOf(language) === -1) {
        this.filteredLanguage.push(language);
      }
    }
  }
  render() {
    return (
      <ul>
        {this.filteredLanguage.map((lang, index) => {
          return (
            <li className="badge" key={index}>
              {lang}
            </li>
          );
        })}
      </ul>
    );
  }
}
