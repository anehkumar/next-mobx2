import React from 'react'
import Link from 'next/link'
import { inject, observer } from 'mobx-react'

@inject('CompanyStore')
@observer
export class Branch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.saveCompany = this.saveCompany.bind(this);

    }

    componentDidMount() {
        
    }
  
    componentWillUnmount() {
      
    }

    saveCompany = (e) => {
        e.preventDefault();
        this.props.CompanyStore.addCompany(this.state.name);
        this.setState({name: ''})
    }
 
    
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

      
    render() {

        const {CompanyStore} = this.props;

        return (
            <div>
                <h1>IN Branch No of company: {CompanyStore.companyCount}</h1>
                <ul>
                    {
                        CompanyStore.companies.map(company => (
                        <li key={company}>{company}</li>
                        ))
                    }
                </ul>
            
            </div>
        )
    }
}
  