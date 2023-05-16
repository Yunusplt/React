// !JSX ile HTML arasında çok fazla fark olmamakla birlikte bazı önemli farklar da mevcut elbette.
//! HTML'de class olarak tanımlanan nitelik JSX'de className olarak tanımlanmalı.
//! HTML'de tek kelime olmayan tabindex gibi nitelikler JSX'de camelCase yapısına uygun olarak tabIndex şeklinde dönüştürülür.
//! HTML'de onclick, onchange gibi nitelikler yukarıdaki camelCase örneğine göre onClick, onChange şeklinde dönüştürülür.
//! HTML'de label etiketinde belirtilen for attribute ü JSX'de htmlFor olarak tanımlanmalı.
//! HTML'de value niteliği JSX'de defaultValue olarak tanımlanmalı.
//! Ayrıca JSX de  javascript ifadeleri {} içinde çalıştırılabilir. Buna map, && gibi yapılarda dahil.

import React, { useState } from "react";

const Form = () => {

    const [isim, setIsim] = useState("")
    const [pass, setPass] = useState("")
    const [ülke, setUlke] = useState("")

    const formAlindi = ()=>{
        alert(`name: ${isim} password:${pass} county:${ülke}`)
    }


  return (
    <div className="container text-center mt-4">
      <h1>*************************************</h1>
      <h1>FORMS (events)</h1>
      <form onSubmit={formAlindi}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            USERNAME: <span className="text-danger fw-bold">{isim}</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            // onInput={(e)=> console.log(e.target.value)}
            onInput={(e) => setIsim(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            PASSWORD
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            COUNTRY: <span className="text-danger fw-bold">{ülke}</span>
          </label>
          <select
            className="form-select"
            onChange={(e) => setUlke(e.target.value)}
          >
            <option selected>Ulkeler</option>
            <option value="1_Turkey">Türkiye</option>
            <option value="2_Germany">Germany</option>
            <option value="3_USA">USA</option>
          </select>
        </div>
        <button className="btn btn-primary" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Form;
