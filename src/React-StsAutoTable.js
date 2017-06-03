import React from 'react';
import ReactDOM from 'react-dom';

class StsAutoTableRows extends React.Component {
    
    /* component setting */
    constructor(props){
        super(props);
        this.state={}
    }

    /* render init */
    render() {
        var content = [];

        for (var i in this.props.theadData) {
            if (this.props.theadData[i].display) {
                content.push(<td>{this.props.tbodyData[this.props.theadData[i].name]}</td>);
            };
        };

        return (
            <tr>
                {content}
            </tr>
        );
    }
}

class StsAutoTableHeader extends React.Component {

    constructor(props){
        super(props);
        this.state={

        }
    }

    render() {

        var content = [];

        for (var i in this.props.theadData) {
            if (this.props.theadData[i].display) {
                content.push(<th>{this.props.theadData[i].title}</th>);
            }
        }

        return (
            <tr>
                {content}
            </tr>
        );
    }
}

class StsAutoTable extends React.Component {
    
    /* component setting */
    constructor(props){
        super(props);
        this.state = {
            thead : null,
            tbody : null,
            tfoot : null
        };
    }

    /* private fun */

    /* publick fun */
    reRender (Tabledata) {
        if (Tabledata.header && Tabledata.header.length > 0) {
            this.setState({thead: Tabledata.header});
        }
        if (Tabledata.content && Tabledata.content.length > 0) {
            this.setState({tbody: Tabledata.content});
        }
        if (Tabledata.footer && Tabledata.footer.length > 0) {
            this.setState({tbody: Tabledata.footer});
        }
    }

    /* render init */
    componentWillMount (){
        if (this.props.tableData.header && this.props.tableData.header.length > 0) {
            this.setState({thead: this.props.tableData.header});
        }
        if (this.props.tableData.content && this.props.tableData.content.length > 0) {
            this.setState({tbody: this.props.tableData.content});
        }
        if (this.props.tableData.footer && this.props.tableData.footer.length > 0) {
            this.setState({tbody: this.props.tableData.footer});
        }
    }
    
    render (){
        console.log(this.state)
        
        var tbodyItems = [];


        for (var i in this.state.tbody) {
            tbodyItems.push(<StsAutoTableRows tbodyData={this.state.tbody[i]} theadData={this.state.thead} />);
        };

        return (
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead>
                        <StsAutoTableHeader theadData={this.state.thead} />
                    </thead>
                    <tbody>
                        {tbodyItems}
                    </tbody>
                </table>
            </div>
        );
    }
}
