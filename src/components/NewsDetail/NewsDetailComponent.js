import React, { Component } from 'react';
import { Card, CardHeader, CardImg, CardBody, CardFooter, CardTitle, CardSubtitle, CardText } from 'reactstrap';

class NewsDetailComponent extends Component {
    render() {
        if (this.props.selectedNewsItem === undefined) {
            return (
                <div></div>
            );
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 m-1">
                        <Card>
                            <CardHeader>
                                <CardImg src={this.props.selectedNewsItem.media[0]['media-metadata'][2].url}></CardImg>
                            </CardHeader>
                            <CardBody>
                                <CardTitle>
                                    {this.props.selectedNewsItem.title}
                                </CardTitle>
                                <CardSubtitle>
                                    {this.props.selectedNewsItem.author}
                                    <span className="float-right">{this.props.selectedNewsItem.publishedDate}</span>
                                </CardSubtitle>
                                <CardText className="mt-2">
                                    {this.props.selectedNewsItem.abstract}
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsDetailComponent;