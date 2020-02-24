import {observable, action, computed} from 'mobx';
import { useStaticRendering } from 'mobx-react'

const isServer = typeof window === 'undefined'
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer)

export class CompanyStore{
    @observable companies = [];

    @action addCompany = (company) => {
        this.companies.push(company);
    }

    @computed get companyCount(){
        return this.companies.length;
    }
}

/* const CompanyStore = new CompanyStore();
export default CompanyStore; */

export async function fetchInitialCompanyState() {
    // You can do anything to fetch initial store state
    return {}
}