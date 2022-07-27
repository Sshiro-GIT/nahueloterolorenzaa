import React from "react";
import logo from "../../assets/logoTienda.jpg"
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from "react-router-dom";

const viewport = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
};
const Navbar = () => {
    const categories = [
        { name: "remeras", id: 1, route: "/category/remeras" },
        { name: "jean", id: 1, route: "/category/jean" },
        { name: "polleras", id: 1, route: "/category/polleras" },
        { name: "zapatos", id: 1, route: "/category/zapatos" },
        { name: "vestidos", id: 1, route: "/category/vestidos" },
    ];

    return (
        <header style={styles.container}>
            <div style={styles.branchContainer}>
                <Link to="/"><img style={styles.logo} src={logo} alt="logo" /></Link>
                <h1 style={styles.title}>showroom</h1>
            </div>
            <div style={styles.links}>
                <nav>
                    {categories.map((category) => <NavLink key={category.id} style={styles.link} to={category.route}>{category.name}</NavLink>)}
                </nav>
                <Link to="/cart"><CartWidget /></Link>
            </div>
        </header >
    )
}

const styles = {
    container: {
        display: viewport.width > 900 ? 'flex' : 'none',
        backgroundColor: '#E1C0DF',
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    branchContainer: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    title: {
        fontSize: 25,
        padding: 10
    },
    links: {
        display: "flex"
    },
    link: {
        fontSize: 25,
        padding: 20
    },
    logo: {
        height: 70
    },
};
export default Navbar 
