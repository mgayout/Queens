import React, { Component } from "react";
import { withTranslation } from "react-i18next";

class NoCrash extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    
    static getDerivedStateFromError(_) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Error</h1>
                </div>
            )
        }
        return this.props.children;
    }
}

export default withTranslation()(NoCrash);