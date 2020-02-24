import App from 'next/app'
import React from 'react'
import { fetchInitialCompanyState, CompanyStore } from '../stores/CompanyStore'
import { Provider } from 'mobx-react'

class MySampleApp extends App{
    state = {
        store: new CompanyStore(),
    }

    static async getInitialProps(appContext) {
        const appProps = await App.getInitialProps(appContext)
        const initialCompanyState = await fetchInitialCompanyState()

        return {...appProps, initialCompanyState }
    }

    static getDerivedStateFromProps(props, state) {
        //state.store.addCompany(props.initialCompanyState)
        return state
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <Provider CompanyStore={this.state.store}>
                <Component {...pageProps} />
            </Provider>
        )
    } 
}

export default MySampleApp