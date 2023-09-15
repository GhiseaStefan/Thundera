import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Container, LogoLink, LogoImage, MenuContainer, UtilityContainer, SearchWrapper, UserWrapper, CartWrapper, CartCount, UserContainer, UserName, Hlink } from './NavbarStyles'
import { AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
import NavProducts from './NavProducts/NavProducts'
import Category from '../../stores/categoryStore';
import { useNavigate } from 'react-router-dom';
import NavbarCart from './NavbarCart/NavbarCart';
import Navlink from './Navlink/Navlink';
import { setUser } from '../../slices/userSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const categories = useSelector((state) => state.categories);
    const user = useSelector((state) => state.user);
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        try {
            dispatch(Category.fetchCategories());
        } catch (err) {
            console.error(err);
        }
    }, [dispatch]);

    const handleLogout = () => {
        dispatch(setUser({}));
        localStorage.removeItem('userToken');
        window.location.href = '/';
    }

    return (
        <Container>
            <LogoLink href='/'>
                <LogoImage src='/images/Logo.png' alt='' />
            </LogoLink>
            <MenuContainer>
                <Navlink name='Home' path='/' />
                <NavProducts categories={categories} />
            </MenuContainer>
            <UtilityContainer>
                <SearchWrapper>
                    <AiOutlineSearch />
                </SearchWrapper>
                <UserWrapper>
                    <Hlink href='/account/accountData'>
                        {user ?
                            <UserName>
                                {`${user.email.split('@')[0][0].toUpperCase()}${user.email.split('@')[0].slice(1)}`}
                            </UserName>
                            :
                            <AiOutlineUser />
                        }
                    </Hlink>
                    <UserContainer>
                        {user ?
                            <>
                                <div onClick={handleLogout}>
                                    Logout
                                </div>
                            </>
                            :
                            <>
                                <div onClick={() => navigate('/account/login')}>
                                    Login
                                </div>
                                <div onClick={() => navigate('/account/register')}>
                                    Register
                                </div>
                            </>
                        }
                    </UserContainer>
                </UserWrapper>
                <CartWrapper>
                    <Hlink href='/cart'>
                        <AiOutlineShoppingCart />
                    </Hlink>
                    {user &&
                        <>
                            <NavbarCart />
                            <CartCount>{cart.reduce((acc, ci) => acc + ci.quantity, 0)}</CartCount>
                        </>
                    }
                </CartWrapper>
            </UtilityContainer>
        </Container>
    )
}

export default Navbar