"use client";
import React, { useState } from 'react';
import ItemLayout from './about/ItemLayout';

// Composant du formulaire avec des checkboxes et un bouton de soumission
function Formpermonth() {
  // État local pour suivre les états des checkboxes
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  });

  // État local pour stocker la somme des valeurs des checkboxes cochées
  const [sum, setSum] = useState(0);

  // Fonction pour mettre à jour l'état d'une checkbox
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({
      ...checkboxes,
      [name]: checked,
    });
  };

  // Calcul de la somme des valeurs des checkboxes cochées
  const calculateSum = () => {
    let totalSum = 0;
    for (const checkbox in checkboxes) {
      if (checkboxes[checkbox]) {
        switch (checkbox) {
          case 'checkbox1':
            totalSum += 600;
            break;
          case 'checkbox2':
            totalSum += 400;
            break;
          default:
            break;
        }
      }
    }
    return totalSum;
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    const calculatedSum = calculateSum();
    setSum(calculatedSum);
  };

  return  ( 
    
    <ItemLayout className={"col-span-full mt-8 w-full h-auto"}>
    <div className={"flex items-center justify-around  w-full h-auto col-span-full max-xl:flex-col"}>
      <h2 className="  text-3xl md:text-3xl text-left text-accent capitalize">
            Prix par mois*
          </h2>
      
        <form onSubmit={handleSubmit} className="flex items-center  w-800 h-auto max-xl:my-6 max-md:flex-col ">
          <label className={` cursor-pointer w-auto border-2 hover:border-accent rounded border-solid px-2 mr-6 h-auto  text-left text-1xl max-md:px-2 max-md:mr-0 max-md:text-2xl ${checkboxes.checkbox1 ? 'border-accent' : ''} `}>
            <input
              type="checkbox"
              name="checkbox1"
              checked={checkboxes.checkbox1}
              onChange={handleCheckboxChange}
              className="mr-2 sr-only"
            />
            SEO
          </label>
          
          <label className={` cursor-pointer w-auto border-2 hover:border-accent rounded border-solid px-2 mr-6 h-auto  text-left text-1xl max-md:px-2 max-md:mr-0 max-md:mt-4 max-md:text-2xl ${checkboxes.checkbox2 ? 'border-accent' : ''} `}>
            <input
              type="checkbox"
              name="checkbox2"
              checked={checkboxes.checkbox2}
              onChange={handleCheckboxChange}
              className="mr-2 sr-only"
            />
            Community management
          </label>
          
          {/* Bouton de soumission du formulaire */}
          <button type="submit" className="border-2  ml-10 max-md:ml-0 rounded border-solid bg-transparent hover:border-accent text-white font-semibold py-2 px-4 rounded max-md:mt-6 ">
            Calculer
          </button>
        </form>

        <div className="">
          <span className='text-3xl md:text-4xl text-accent text-center capitalize '>{sum}€/mois</span>
        </div>
      </div>
      
    </ItemLayout>
    // <ItemLayout className={"col-span-full mt-6 w-full h-auto"}>
    // <div className="">
    //       <span className='text-xl md:text-4xl text-accent text-center capitalize'>{sum}€</span>
    //     </div>
    // <ItemLayout />

  
    
  );
}

export default Formpermonth;
