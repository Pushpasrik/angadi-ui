
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import {Avatar} from 'primereact/avatar'
import { useCart } from '../../components/contexts/ShoppingCartContext';
import { Badge } from 'primereact/badge';

export default function BasicDemo() {
    const { state } = useCart();
    const items: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            className: 'ml-5'
        },
        {
            label: 'My Bag',
            icon: 'pi pi-shopping-cart',
            template: (item) => {
                return <a className="flex align-items-center p-menuitem-link">
                <span className={item.icon} />
                <span className="mx-2">{item.label}</span>
                {state.items.length ? <Badge className="ml-auto" value={state.items.length} />: ''}
            </a>
            }
        },
        {
            label: 'My Account',
            icon: 'pi pi-user',
            items: [
                {
                    label: 'Orders',
                    icon: 'pi pi-receipt'
                },
                {
                    label: 'Settings',
                    icon: 'pi pi-sliders-h'
                },
                {
                    label: 'Singout',
                    icon: 'pi pi-sign-out'
                }
            ]
        }
    ];
    
    return (
        <div className="card">
            <Menubar model={items} start={<Avatar icon="pi pi-shop" size="xlarge" />}/>
        </div>
    )
}
        