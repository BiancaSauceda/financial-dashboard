import SideNav from '@/app/ui/dashboard/sidenav'; // Importing the SideNav comp for sidebar navigation.

export default function Layout({ children }) { // Defining the Layout comp that accepts children 
// prop for nested content.
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden"> 
        {/*Creating a responsive Flexbox container that spans the screen height. */}
            <div className="w-full flex-none md:w-64"> 
                {/* Defining the sidebar with full width on small screens and fixed width on medium screens. */}
                <SideNav /> 
                {/* Rendering the SideNav component inside the sidebar. */}
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div> 
            {/* Creating the main content area with flexible space, padding, and overflow handling. */}
        </div>
    );
}
