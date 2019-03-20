import React from "react";

export interface Props {
  children: React.ReactNode;
  className?: string;
  url: string;
  title?: string;
  external?: boolean;
}

class Link extends React.Component<Props> {
  shouldComponentUpdate = () => false; // The link content does not ever change

  render() {
    const { className, url, title, external = true } = this.props;
    return (
      <a
        className={className}
        href={url}
        title={title}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {this.props.children}
      </a>
    );
  }
}

export default Link;
