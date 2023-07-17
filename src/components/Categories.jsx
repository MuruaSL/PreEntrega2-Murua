import React from 'react'
import { IconButton,Menu,MenuButton,MenuList,MenuItem} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
const Categories = () => {
    return (
        <>
        <Menu>
            <MenuButton as={IconButton} icon={<HamburgerIcon />} >
            Menu
            </MenuButton>
            <MenuList>
                <MenuItem className="menuItemCss">Mantas</MenuItem>
                <MenuItem className="menuItemCss">Frazadas</MenuItem>
                <MenuItem className="menuItemCss">Sabanas</MenuItem>
                <MenuItem className="menuItemCss">Acolchados</MenuItem>
                <MenuItem className="menuItemCss">Ideas para tu hogar</MenuItem>
                <MenuItem className="menuItemCss">Quienes somos</MenuItem>
                <MenuItem className="menuItemCss">Que hacemos</MenuItem>
                <MenuItem className="menuItemCss">Contactanos</MenuItem>
            </MenuList>
        </Menu>
        </>
    );
    }

export default Categories