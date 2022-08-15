import React from 'react';
import what from '../../assets/what.ico'
import insta from '../../assets/insta.ico'
import face from '../../assets/face.ico'

const viewport = {
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight
};

const Footer = () => {

  return(
      <footer style={styles.container}>
          <div >
              <p style={styles.spas}>Copyright &copy; Showroom Lorenza - 2022</p>
          </div>
          <div style={styles.redes}>
              <div style={styles.spas}>
                <a href="https://www.instagram.com/showroomlorenza/"><img src={insta} alt="instagram"/></a>
              </div>
              <div style={styles.spas}>
                  <a href="https://www.facebook.com/pages/category/Apparel---clothing/Lorenza-Indumentaria-843064959214392/"><img src={face} alt="facebook"/></a>
              </div>
              <div style={styles.spas}>
                  <a href="https://api.whatsapp.com/send?phone=+"><img src={what} alt="whatsapp"/></a>
              </div>
              <div style={styles.spas}>
                  <p>by Nahuel Otero</p>
              </div>
          </div>
      </footer>
      );
};

const styles = {
  container: {
    display: viewport.width > 900 ? 'flex' : 'none',
    backgroundColor: '#E1C0DF',
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    bottom: "0",
  },
  redes:{
    display: "flex",
    padding:"10px",
    alignItems: "center",
  },
  spas:{
    padding:"10px",
    fontSize:"20px",
  },
};

export default Footer