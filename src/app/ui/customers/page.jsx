import { lusitana } from '@/app/ui/fonts';
import CustomersTable from './table';

export default function Page() {
    return (

        <div>
            <CustomersTable />
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Customers Page</h1>
        </div>
        
    )

}