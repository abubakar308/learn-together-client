/* eslint-disable react/prop-types */
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const Authcontext = createContext();
const Authprovider = ({ children }) => {

    const authInfo ={


    }
    return (
        <div>
            <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
        </div>
    );
};

export default Authprovider;