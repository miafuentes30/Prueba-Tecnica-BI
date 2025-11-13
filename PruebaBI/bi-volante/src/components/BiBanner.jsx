// src/BiBanner.jsx
import React from "react";

const BiBanner = () => {
  return (
    <>
      <style>{`
        *,*::before,*::after { box-sizing: border-box; }
        :root{
          --bi-blue:#0B3C5D;
          --bi-yellow:#FEB81C;
          --bi-cyan:#00C4D6;
          --bi-white:#FFFFFF;
        }
        body{ margin:0; background:#eceff3; font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif; }

        .bi-banner{
          position:relative;
          width:min(1120px,96vw);
          background:var(--bi-blue);
          color:var(--bi-white);
          border-radius:56px 0 56px 0;
          padding:48px 56px;
          overflow:hidden;
          box-shadow:0 18px 50px rgba(0,0,0,.25);
          animation:banner-enter 1s cubic-bezier(.2,.7,.2,1) forwards;
          min-height: 420px;
        }
        @keyframes banner-enter{
          0%{ opacity:0; transform: translateY(40px) scale(.96); }
          100%{ opacity:1; transform: translateY(0) scale(1); }
        }

        /* === CUADROS TIPO BI (en la esquina superior izquierda de la imagen) === */
        .color-shapes{
          position:absolute;
          top:-74px;
          left:-87px;
          width:168px;
          height:168px;
          pointer-events:none;
          z-index:1;
          transform: rotate(270deg);
          transform-origin: center;
        }
        .shape-block{
          position: absolute;
          border-radius:0;
          box-shadow:0 10px 24px rgba(0,0,0,.35);
          opacity:0;
          transform: translateY(16px) scale(.7);
          filter: blur(4px);
          animation: shapes-in .9s ease-out forwards;
        }
        .shape-block--white{
          background:var(--bi-white);
          border-radius: 0 28px 0 28px;
          animation-delay:.20s;
          width: 60px;
          height: 60px;
          top: 25px;
          left: 38px;
        }
        .shape-block--yellow{
          background:var(--bi-yellow);
          border-radius: 28px 0 28px 0;
          animation-delay:.30s;
          width: 84px;
          height: 84px;
          top: 0px;
          left: 96px;
        }
        .shape-block--cyan{
          background:var(--bi-cyan);
          border-radius: 0 28px 0 28px;
          animation-delay:.40s;
          width: 70px;
          height: 70px;
          top: 84px;
          left: 96px;
        }
        @keyframes shapes-in{
          0%{
            opacity:0;
            transform: translateY(16px) scale(.6);
            filter: blur(4px);
          }
          100%{
            opacity:1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        /* Layout */
        .bi-content{
          position:relative;
          z-index:2;
          display:grid;
          grid-template-columns: 1fr 1.2fr;
          gap:60px;
          align-items:center;
        }

        /* Texto */
        .bi-text{ max-width:580px; margin-inline:auto; text-align:center; }
        
        .bi-tag{
          display:inline-block;
          background:rgba(255,255,255,.15);
          color:var(--bi-cyan);
          padding:8px 20px;
          border-radius:20px;
          font-size:13px;
          font-weight:700;
          letter-spacing:.5px;
          text-transform:uppercase;
          margin-bottom:16px;
          animation: slide-in-down .8s ease-out forwards;
          opacity:0;
          display:none;
        }
        @keyframes slide-in-down{
          from{ opacity:0; transform: translateY(-20px); }
          to{ opacity:1; transform: translateY(0); }
        }

        .bi-title{
          font-size: clamp(38px, 4.5vw, 56px);
          font-weight:900;
          line-height:1.1;
          margin:0 0 20px;
          animation: slide-in-left 1s .2s ease-out forwards;
          opacity:0;
        }
        @keyframes slide-in-left{
          from{ opacity:0; transform: translateX(-40px); }
          to{ opacity:1; transform: translateX(0); }
        }

        .bi-title span{
          display:inline-block;
          background:var(--bi-yellow);
          color:var(--bi-blue);
          padding:6px 14px;
          border-radius:20px 0 20px 0;
          line-height:1;
        }

        .bi-desc{
          font-size:18px;
          line-height:1.6;
          opacity:.92;
          margin-bottom:32px;
          animation: fade-in 1s .4s ease-out forwards;
          opacity:0;
        }
        @keyframes fade-in{
          from{ opacity:0; }
          to{ opacity:.92; }
        }

        .bi-cta{
          display:inline-flex;
          align-items:center;
          gap:12px;
          padding:16px 36px;
          background:var(--bi-cyan);
          color:var(--bi-blue);
          border:none;
          border-radius:50px;
          font-size:17px;
          font-weight:800;
          cursor:pointer;
          box-shadow:none;
          transition: background-color .2s ease, transform .2s ease;
          animation: slide-in-up 1s .6s ease-out forwards;
          opacity:0;
        }
        @keyframes slide-in-up{
          from{ opacity:0; transform: translateY(20px); }
          to{ opacity:1; transform: translateY(0); }
        }
        
        .bi-cta:hover{
          background: #00d4e6;
          transform:none;
          box-shadow:none;
          filter:none;
        }

        .bi-cta::after{ content:none; }

        /* Imagen - Movida más a la derecha */
        .bi-image-wrap{
          position:relative;
          animation: zoom-in 1.2s .3s ease-out forwards;
          opacity:0;
          margin-left: 80px;
          margin-top: 70px;
        }
        @keyframes zoom-in{
          from{ opacity:0; transform: scale(.85); }
          to{ opacity:1; transform: scale(1); }
        }

        .bi-image{
          width:100%;
          height:240px;
          border-radius:0 28px 0 28px;
          overflow:hidden;
          box-shadow:0 20px 50px rgba(0,0,0,.4);
          transform: perspective(1000px) rotateY(8deg);
          transition: transform .4s ease;
          position: relative;
          z-index: 2;
        }
        .bi-image:hover{
          transform: perspective(1000px) rotateY(0deg) scale(1.02);
        }

        .bi-image img{
          width:100%;
          height:100%;
          object-fit:cover;
          display:block;
        }

        /* Badge flotante - REMOVIDO */
        .bi-badge{
          display: none;
        }

        /* Responsive */
        @media (max-width: 880px){
          .bi-banner{ padding:36px 28px; min-height:auto; border-radius:40px; }
          .bi-content{ grid-template-columns: 1fr; gap:40px; }
          .bi-image-wrap{ order:-1; margin-left: 0; }
          .bi-image{ height:220px; transform: perspective(1000px) rotateY(0deg); }
          .bi-title{ font-size:32px; }

          .color-shapes{
            top:-52px;
            left:-60px;
            width:120px;
            height:120px;
            grid-template-columns: 60px 60px;
            grid-template-rows: 60px 60px;
            gap:0;
          }
          .shape-block{ border-radius:0; }
          .shape-block--white{ border-radius:0 20px 0 20px; width: 45px; height: 45px; }
          .shape-block--yellow{ border-radius:20px 0 20px 0; width: 60px; height: 60px; }
          .shape-block--cyan{ border-radius:0 20px 0 20px; width: 52px; height: 52px; }
        }
      `}</style>

      <section className="bi-banner">
        <div className="bi-content">
          <div className="bi-image-wrap">
            {/* CUADROS COLOREADOS TIPO BI */}
            <div className="color-shapes" aria-hidden="true">
              <div className="shape-block shape-block--white" />
              <div className="shape-block shape-block--yellow" />
              <div className="shape-block shape-block--cyan" />
            </div>

            <div className="bi-image">
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop"
                alt="Persona usando su smartphone para banca digital"
              />
            </div>

            <div className="bi-badge">
              Hazlo digital
            </div>
          </div>

          <div className="bi-text">
            <div className="bi-tag"></div>
            <h1 className="bi-title">
              BENEFICIOS QUE <span>te hacen crecer</span>
            </h1>
            <p className="bi-desc">
              Disfruta tasas preferenciales, cashback en tus compras y herramientas digitales que hacen tu vida financiera más fácil.
            </p>
            <button className="bi-cta">
              Quiero conocer los beneficios
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BiBanner;