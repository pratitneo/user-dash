import DropdownProvider from './Dropdown/DropdownProvider'
import { NewUserModalProvider } from './NewUserModal/NewUserModalProvider'
import { TableProvider } from './Table/TableProvider'
import type { ContextProps } from '../utils/types'
import { store } from './index'
import { Provider } from 'react-redux'

export const AppProviders = ({ children }: ContextProps) => {
    return (
        <Provider store={store}>
            <DropdownProvider>
                <NewUserModalProvider>
                    <TableProvider>
                        {children}
                    </TableProvider>
                </NewUserModalProvider>
            </DropdownProvider>
        </Provider>
    )
}

export default AppProviders