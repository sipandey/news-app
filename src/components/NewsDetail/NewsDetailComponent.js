import React, { Component } from 'react';
import { Card, CardHeader, CardBody, CardFooter, CardTitle } from 'reactstrap';

class NewsDetailComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.selectedNewsItem === null) {
            return (
                <div></div>
            );
        }

        return (
            <div className="row">
                <div className="col-12 m-1">
                    <Card>
                        <CardHeader>

                        </CardHeader>
                        <CardTitle>
                            {this.props.selectedNewsItem.title}
                        </CardTitle>
                    </Card>
                </div>

            </div>
        );
    }
}

export default NewsDetailComponent;