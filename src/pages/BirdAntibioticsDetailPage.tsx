import React from 'react';
import { useParams, Link } from 'react-router-dom';

const medicinesData: Record<string, any> = {
  '1': {
  name: 'Ampicure',
  type: 'Antibiotic',
  description: 'Ampicure is a broad-spectrum veterinary antibiotic (semi-synthetic penicillin) used to treat bacterial infections in poultry.',
  composition: 'Each 1 gram of Ampicure powder contains 200 mg of ampicillin trihydrate (equivalent to 174 mg of ampicillin base)',
  indications: 'Ampicure is indicated for the treatment of infections caused by ampicillin-sensitive bacteria, such as respiratory and gastrointestinal infections.',
  dosage: 'Poultry: 1.25 grams per 10 kg body weight, added to drinking water (1.25 grams per liter) per day for 3–5 days.',
  withdrawalTime: '5 days',
  contraindications: 'Not to be used in ruminants, laying hens, or animals with known hypersensitivity. Do not combine with other antibacterial drugs.',
  image: 'https://i.postimg.cc/fbLncyRt/Whats-App-Image-2025-06-10-at-19-47-57-10a6dba8.jpg',
},
  '2': {
    name: 'Penisol',
    type: 'Antibiotic',
    description: 'Effective treatment against necrotic enteritis in broiler chickens caused by Clostridium perfringens.',
    composition: 'Each 1 gm contains: Potassium phenoxymethylpenicillin 325 mg (equivalent to 293 mg Phenoxymethylpenicillin base).',
    indications: 'Used for treatment of necrotic enteritis caused by Clostridium perfringens.',
    dosage: 'Taken orally via drinking water. Full product: 46–68 gm of product per 1000 kg body weight daily for 3–5 days (or 1 gm of product per 10 L of drinking water for 3–5 days).',
    image: 'https://i.postimg.cc/3R58Lccv/Whats-App-Image-2025-06-10-at-19-48-33-18c89f2a.jpg',
  },
  '3': {
  name: 'Amoxydad 20%',
  type: 'Antibiotic',
  composition: 'Each 1 tablet contains Amoxycillin (as dihydrate) 200 mg.',
  indications: `- Broiler chickens: For the treatment of Pasteurellosis and Colibacillosis.
- Turkeys: For the treatment of Pasteurellosis.
- Ducks: For the treatment of infections caused by Streptococcus bovis, Escherichia coli.`,
  dosage: '100 mg/kg in 1 liter of drinking water, daily for 4–5 days.',
  contraindications: `- Not to be used in layers producing eggs for human consumption.
- Not to be used in rabbits or animals hypersensitive to amoxicillin.`,
  sideEffects: 'Allergic reaction, diarrhoea',
  withdrawalTime: `Broiler chickens: 1 day\nDucks: 9 days\nTurkeys: 5 days`,
  image: 'https://i.postimg.cc/Z5WJJmkN/Whats-App-Image-2025-06-10-at-19-49-14-2b727c55.jpg',
},

  '4': {
  name: 'Ampisitin',
  type: 'Antibiotic',
  composition: 'Each 1 g serving contains:\n- Ampicillin (as trihydrate) 200 mg\n- Colistin (as sulfate) 500,000 LU.',
  indications: `Ampisitin is indicated for use in:\n- Diarrhea and enteritis due to E. coli and Salmonella\n- Necrotic enteritis (Clostridium perfringens)\n- Staphylococcal and Streptococcal infections.`,
  dosage: '1 Ampisitin per 10 kg body weight.',
  contraindications: `- Not to be used in chickens producing eggs for human consumption.\n- Not to be used with bacteriostatic drugs.`,
  withdrawalTime: '10 days',
  image: 'https://i.postimg.cc/26DYdB1d/Whats-App-Image-2025-06-10-at-19-51-07-c49ca657.jpg',
},

  '5': {
  name: 'Amoxicillin',
  type: 'Antibiotic',
  composition: 'Each 1 gm contains: Amoxicillin Trihydrate 200 mg.',
  indications: `Amoxicillin is a broad-spectrum antibiotic. It is highly recommended for respiratory infections, skin, and soft tissue infections in farm animals. It is effective against gram-positive and gram-negative bacteria including E. coli, Staphylococcus, and Streptococcus species.`,
  dosage: 'Broiler chickens: 10 gm per 10 liters of drinking water for 3–5 days.',
  image: 'https://i.postimg.cc/NGbtTFBT/Whats-App-Image-2025-06-10-at-19-51-50-39a700d0.jpg',
},

  '6': {
  name: 'Kenamox',
  type: 'Antibiotic',
  composition: 'Each 1 gm contains: Amoxicillin Trihydrate 200 mg.',
  indications: `Kenamox is a broad-spectrum antibiotic. It is highly recommended for respiratory infections, skin, and soft tissue infections in farm animals. It is effective against gram-positive and gram-negative bacteria including E. coli, Staphylococcus, and Streptococcus species.`,
  dosage: 'Poultry: 10–20 mg Amoxicillin/kg body weight (1 gm Kenamox 200 per 1 liter of drinking water daily for 3–5 days).',
  withdrawalTime: '7 days for poultry.',
  precautions: `- The medicated water should be consumed within 24 hours.\n- Not to be used for layers.\n- Not to be used for calves with a functional rumen.`,
  image: 'https://i.postimg.cc/tTp0nQc2/Whats-App-Image-2025-06-10-at-19-52-20-4d71ea62.jpg',
},

  '7': {
  name: 'Delta Amox',
  type: 'Antibiotic',
  composition: 'Each 100 gm contains: Amoxycillin trihydrate 50 gm.',
  indications: `Amoxicillin is a broad-spectrum semisynthetic penicillin effective against Gram-positive bacteria (Clostridium spp) and Gram-negative bacteria (Pasteurella spp, Escherichia coli).`,
  dosage: `Chickens & Turkeys: 15–20 mg of amoxycillin/kg body weight once daily (0.3–0.4 gm DELTA AMOXY 50% per 1 L drinking water for 3 days).\nDucks: 20 mg/kg body weight in drinking water for 3 days (0.4 gm per L).`,
  contraindications: 'Should not be used in birds with known hypersensitivity.',
  sideEffects: 'Hypersensitivity reactions.',
  withdrawalTime: `Chickens (meat): 1 day\nTurkeys (meat): 5 days\nDucks (meat): 9 days`,
  image: 'https://i.postimg.cc/QxV2Tq6G/Whats-App-Image-2025-06-10-at-19-52-47-bb622502.jpg',
},

 '8': {
  name: 'Moxifarm',
  type: 'Antibiotic',
  composition: `Each 1000 mg contains:\n- Amoxicillin Trihydrate 236 mg\n- Equivalent to Amoxicillin base 200 mg`,
  indications: `Used in chickens and turkeys for the treatment of:\n- Necrotic enteritis due to Clostridium spp.\n- Enteritis and diarrhea due to Salmonella spp. and E. coli.\n- Infectious coryza due to Haemophilus gallinarum.`,
  dosage: 'Chickens and turkeys: 20 mg amoxicillin base/kg body weight in drinking water once daily.',
  contraindications: `- Not to be used in cases of hypersensitivity to penicillin.\n- Not to be used in poultry producing eggs for human consumption.`,
  withdrawalTime: '7 days for chickens and turkeys.',
  image: 'https://i.postimg.cc/43vqg23t/Whats-App-Image-2025-06-10-at-19-53-18-215520bf.jpg',
},

 '9': {
  name: 'Nerhacycin',
  type: 'Antibiotic',
  composition: 'Each 100 g contains Neomycin sulphate 20 g (equivalent to Neomycin base 14 g).',
  indications: 'Used for bacterial enteritis caused by E. coli.',
  dosage: 'Growing turkeys: 110 mg of the product/kg body weight in drinking water daily for 5 days.',
  contraindications: `- Should not be used in animals hypersensitive to neomycin.\n- Should not be used in animals suffering from intestinal blockage.`,
  withdrawalTime: 'Null',
  image: 'https://i.postimg.cc/MHLrDhsk/Whats-App-Image-2025-06-10-at-19-53-58-5642640e.jpg',
},

  '10': {
  name: 'Neomycin',
  type: 'Antibiotic',
  composition: 'Each 100 g contains Neomycin Sulfate equivalent to 14 g (neomycin base).',
  indications: 'Used in cases of gastroenteritis caused by E. coli and Salmonella.',
  dosage: 'Chickens, turkeys, and ducks: 5.5 g per 100 kg live weight in 10 liters of drinking water for 3–5 days.',
  withdrawalTime: 'Turkeys and laying hens: 14 days \n Broilers: 5 days',
  image: 'https://i.postimg.cc/c4Vb8Ggw/Whats-App-Image-2025-06-10-at-19-54-29-2bf0f8bc.jpg',
},

  '11': {
  name: 'Neomycin Adwia',
  type: 'Antibiotic',
  composition: 'Each 1 gm contains: Neomycin sulfate 200 mg (equivalent to 140 mg neomycin base).',
  indications: 'Broilers: Nonspecific diarrhea (dietary) and salmonellosis caused by Salmonella spp.',
  dosage: 'Broilers: 0.5 gm per 10 kg body weight (0.5 gm per 1 liter drinking water) daily for 3–5 days.',
  image: 'https://i.postimg.cc/nrX3C3n3/Whats-App-Image-2025-06-10-at-19-54-51-1431927a.jpg',
},

  '12': {
  name: 'Neomycin 20%',
  type: 'Antibiotic',
  composition: 'Each 100 g contains: Neomycin sulfate 20 g.',
  indications: 'Effective for prevention and treatment of gastroenteritis caused by E. coli, Salmonella, and Campylobacter in poultry, sheep, and cattle.',
  dosage: '11 mg/kg body weight (1 gm per liter in drinking water for 3–5 days).',
  withdrawalTime: 'Poultry: Nil',
  image: 'https://i.postimg.cc/pr5B2yB7/Whats-App-Image-2025-06-10-at-19-55-12-51183b49.jpg',
},

  '13': {
  name: 'Neo-Oxy Plus',
  type: 'Antibiotic',
  composition: `Each 100 g contains:\n- Oxytetracycline 20 g\n- Neomycin 20 g\n- Lactose (carrier) up to 100 g`,
  indications: `- Common diarrhea caused by E. coli and Salmonella\n- Omphalitis\n- During the incubation period\n- Cases of rickets resulting from arthritis`,
  dosage: '2 g per liter in drinking water for 3–5 days.',
  image: 'https://i.postimg.cc/P5Q0GFJD/Whats-App-Image-2025-06-10-at-19-55-50-fa749cfc.jpg',
},

  '14': {
  name: 'Neoptosol',
  type: 'Antibiotic',
  composition: 'Each 1 ml contains:\n- Neomycin sulfate 70 mg\n- Streptomycin sulfate 70 mg',
  indications: 'Used for treatment of neomycin- and streptomycin-sensitive enteric infections, including in neonatal lambs caused by E. coli.',
  dosage: '1 ml of Neoptosol per 5 kg body weight in drinking water, twice daily for 3–4 days.',
  contraindications: 'Do not use in animals with known hypersensitivity to streptomycin.',
  sideEffects: `- Active ingredients are not significantly absorbed after administration.\n- Rarely, oral neomycin may cause ototoxicity, diarrhea, and intestinal malabsorption.`,
  image: 'https://i.postimg.cc/j2fkMMBL/Whats-App-Image-2025-06-10-at-19-56-25-036587f7.jpg',
},

  '15': {
  name: 'Royalneo',
  type: 'Antibiotic',
  composition: 'Each 1 g contains:\n- Neomycin Sulphate 300 mg\n(Equivalent to Neomycin base 210 mg)',
  indications: `Broiler Chickens:\n- Used for treatment of diarrhea associated with salmonellosis caused by Salmonella spp.\n- Reduces mortalities associated with colibacillosis caused by Escherichia coli\n- Also effective for diarrhea caused by the susceptible organisms mentioned above.`,
  dosage: '1.5 g Royalneo per liter of drinking water for 3–5 days.',
  image: 'https://i.postimg.cc/RF6P0PSX/Whats-App-Image-2025-06-10-at-19-56-53-cc645126.jpg',
},

  '16': {
  name: 'OFLO C 20%',
  type: 'Antibiotic',
  composition: 'Every 1 kg contains Ofloxacin 200 g.',
  indications: `Effective against:\n- Infectious coryza\n- Fowl cholera\n- Salmonellosis\n- Enteritis\n- E. coli\n- Coccidiosis\n- Chronic respiratory disease\n- Diarrhea`,
  dosage: 'Poultry: 1 g per 2–4 liters of drinking water for 3–5 days.',
  withdrawalTime: '7 days for meat.',
  image: 'https://i.postimg.cc/4NZ5C498/Whats-App-Image-2025-06-10-at-19-57-22-2fb1fc31.jpg',
},

  '17': {
  name: 'Cipro 20%',
  type: 'Antibiotic',
  composition: 'Each 1 g contains Ciprofloxacin 200 mg.',
  indications: `Poultry:\n- CRD due to Mycoplasma or E. coli\n- Colisepticaemia\n- Enteritis\n- Clostridial infections\n- Infectious coryza\n- Omphalitis and yolk sac infections`,
  dosage: 'Poultry: 1 g per 2 liters of drinking water for 3–5 days.',
  withdrawalTime: 'Chickens: 7 days.',
  image: 'https://i.postimg.cc/pdgfsPvJ/Whats-App-Image-2025-06-10-at-19-57-52-67d01d51.jpg',
},

  '18': {
  name: 'JOTRIL 10%',
  type: 'Antibiotic',
  composition: 'Each 1 ml of solution contains Enrofloxacin 100 mg.',
  indications: `Used for all common bacterial infections in poultry such as:\n- E. coli\n- Haemophilus\n- Pasteurella\n- Salmonella\n- Staphylococcus\n- Streptococcus\n- Clostridium\n- Mycoplasma`,
  dosage: '10 mg/kg body weight or 100 ml per 200 L of drinking water for 3–5 days.',
  withdrawalTime: 'Stop using 5 days before slaughter. Do not combine with other treatments.',
  image: 'https://i.postimg.cc/Kc7P5XHt/Whats-App-Image-2025-06-10-at-19-58-19-12c82718.jpg',
},

  '19': {
  name: 'Oxytetracycline 20%',
  type: 'Antibiotic',
  composition: 'Each 100 g contains:\n- Oxytetracycline hydrochloride 21.60 g (equivalent to 20 g oxytetracycline base)',
  indications: `Bacteriostatic antibiotic from the tetracycline group, effective against:\n- Chlamydia\n- E. coli\n- Haemophilus\n- Mycoplasma\n- Pasteurellosis\n- Salmonella\n- Staphylococcus\n- Streptococcus spp.`,
  dosage: 'Poultry: 1 g powder per 1 L of drinking water for 3–5 days.',
  withdrawalTime: 'Poultry (Meat): 7 days.',
  image: 'https://i.postimg.cc/cHy3QT7D/Whats-App-Image-2025-06-10-at-19-58-56-e5682e34.jpg',
},

  '20': {
  name: 'Oxytetracycline Hydrochloride',
  type: 'Antibiotic',
  composition: 'Each 100 g contains:\n- Oxytetracycline HCL 20 g (equivalent to 18.53 g oxytetracycline base)',
  indications: `Broiler chickens:\n- Infectious synovitis (Mycoplasma synoviae)\n- Fowl cholera (Pasteurella multocida)`,
  dosage: 'Poultry: 0.5–1.5 g per liter of drinking water for 3–5 days.',
  withdrawalTime: 'Meat: 7 days (Chicken & Turkey), Eggs: 1 day',
  image: 'https://i.postimg.cc/L4VP1tJT/Whats-App-Image-2025-06-10-at-19-59-18-3eb2ac1d.jpg',
},

  '21': {
  name: 'Oxytetracycline',
  type: 'Antibiotic',
  composition: 'Each 100 g contains:\n- Oxytetracycline HCL 21.6 g (equivalent to 20 g base)',
  indications: `Used for the treatment of diseases in:\n- Chicken, turkey, beef cattle, calves, non-lactating dairy cattle, sheep, and swine.\n\nIn poultry:\n- Infectious synovitis\n- Chronic respiratory disease (CRD)\n- Fowl cholera\n- Hexamitiasis\n- Complicated bacterial infections in growing turkey`,
  dosage: 'Chicken and turkey: 25 g per liter of drinking water for 7–14 days.',
  image: 'https://i.postimg.cc/fbXtTm4Y/Whats-App-Image-2025-06-10-at-19-59-52-5c27b441.jpg',
},

  '22': {
  name: 'DOXIN',
  type: 'Antibiotic',
  composition: 'Each 1 g contains:\n- Doxycycline HCl 200 mg (equivalent to 185 mg doxycycline base)',
  indications: `Indicated for treatment in broiler chickens:\n1. Chronic respiratory disease (CRD) – Mycoplasma gallisepticum\n2. Infectious coryza – Haemophilus paragallinarum\n3. Pullorum disease – Salmonella pullorum\n4. Fowl typhoid – Salmonella gallinarum\n5. Necrotic enteritis – Clostridium perfringens`,
  dosage: '1 g DOXIN per 18 kg body weight or per 1.8 liters of drinking water for 5–7 days.',
  contraindications: ['Not to be used in poultry producing eggs for human consumption.'],
  withdrawalTime: 'Broiler chickens: 10 days',
  image: 'https://i.postimg.cc/ZYfRmV91/Whats-App-Image-2025-06-10-at-20-00-25-405be4e3.jpg',
},

  '23': {
  name: 'PAN FLOR',
  type: 'Antibiotic',
  composition: 'Each 1 ml contains:\n- Forfenicol 100 mg',
  indications: 'For the treatment of coli septicemia caused by E. coli in chickens.',
  dosage: `Chicken:\n- 0.2 ml of Panflor/kg body weight per day for 5 consecutive days\nOR\n- 2 ml of Panflor/liter of drinking water per day for 5 consecutive days.`,
  contraindications: ['Not to be used for chickens producing eggs for human consumption.'],
  withdrawalTime: '',
  image: 'https://i.postimg.cc/HL4Yh2Dv/Whats-App-Image-2025-06-10-at-20-01-04-113a71e2.jpg',
},

  '24': {
  name: 'FLORICOL',
  type: 'Antibiotic',
  composition: 'Each 1 ml contains:\n- Florfenicol 100 mg',
  indications: `Florfenicol is indicated for the treatment of:\n- Chronic respiratory disease caused by Mycoplasma\n- Fowl cholera caused by Pasteurella multocida\n- Salmonellosis caused by Salmonella Pullorum`,
  dosage: 'Broiler chickens: 2 ml FLORICOL per 10 kg B.W. for 5 days (in drinking water).',
  contraindications: ['Not used for chickens that produce eggs for human consumption.'],
  withdrawalTime: 'Meat: 5 days',
  image: 'https://i.postimg.cc/6529Xwxv/Whats-App-Image-2025-06-10-at-20-01-28-28c8952a.jpg',
},

  '25': {
  name: 'Ucimycin',
  type: 'Antibiotic',
  composition: 'Per 100g:\n- Erythromycin activity (as thiocyanate): 5g\n- Excipient q.s. to 100g',
  indications: `- An aid in the management of respiratory syndromes resulting from stresses of vaccination, debeaking, and movement of birds\n- Chronic respiratory disease (air sacculitis)\n- Infectious coryza\n- Blue comb or synovitis (caused by PPLO or coccal organisms)`,
  dosage: 'Add 5–10g to every 4 liters or 250g to 200 liters of drinking water and mix thoroughly.',
  withdrawalTime: '7 days',
  image: 'https://i.postimg.cc/ZYgSjgvK/Whats-App-Image-2025-06-10-at-20-01-55-14c3cab7.jpg',
},

  '26': {
  name: 'TILMICORAL',
  type: 'Antibiotic',
  composition: 'Each 100 ml contains:\n- Tilmicosin phosphate 27.8 gm (equivalent to 25 gm Tilmicosin base)',
  indications: `For the treatment of:\n- Chickens (except hens producing eggs for human consumption) & Turkeys\n- Chronic Respiratory Disease (CRD) & Infectious sinusitis caused by Mycoplasma gallisepticum\n- Infectious synovitis caused by Mycoplasma synoviae`,
  dosage: `Chickens: 60–80 ml of product/1000 kg b.wt. in drinking water for 3 days (0.6–0.8 ml/L)\nTurkeys: 40–108 ml of product/1000 kg b.wt. in drinking water for 3 days (0.4–1.08 ml/L)`,
  withdrawalTime: 'Chicken: 12 days\nTurkeys: 19 days',
  image: 'https://i.postimg.cc/TPRMpvFQ/Whats-App-Image-2025-06-10-at-20-02-27-ae7609a6.jpg',
},

  '27': {
  name: 'Erythromycin 20%',
  type: 'Antibiotic',
  composition: 'Each 100 gm contains:\n- Erythromycin thiocyanate 21.62 gm',
  indications: `- Respiratory tract infections in chickens\n- Air sac disease in turkeys`,
  dosage: '1.25 gm/L of drinking water for 3–5 days',
  image: 'https://i.postimg.cc/W3d21PqC/Whats-App-Image-2025-06-10-at-20-02-52-90fb8751.jpg',
},

  '28': {
  name: 'TYDOVET',
  type: 'Antibiotic',
  composition: `Each 1 gm contains:
- Tylosin tartrate 108.18 mg (Eq. to Tylosin base 100 mg)
- Doxycycline HCI 135.26 mg (Eq. to doxycycline base 125 mg)`,
  indications: `Tydovet is indicated for the treatment of:
- Chronic respiratory disease (CRD) caused by Mycoplasma gallisepticum in broiler chickens and turkeys.
- Infectious sinusitis caused by Mycoplasma gallisepticum in turkeys.
- Infectious coryza caused by Haemophilus paragallinarum in broiler chickens.`,
  dosage: `To be added to drinking water:
- Broiler chickens: 1 gm Tydovet per liter of drinking water for 2-3 days.
- Turkeys: 1 gm Tydovet per liter of drinking water for 2-3 days.`,
  contraindications: [
    'Not used for animals with hepatic dysfunction',
    'Not used for animals producing eggs for human consumption',
    'Used only for broilers'
  ],
  withdrawalTime: `- Meat for broiler chicken: 10 days\n- Meat for turkey: 12 days`,
  image: 'https://i.postimg.cc/x8KVXjfx/Whats-App-Image-2025-06-10-at-20-03-12-249a0a0d.jpg',
},

  '29': {
  name: 'Colistin Sulphate',
  type: 'Antibiotic',
  composition: 'Each gm contains: Colistin Sulphate 5,000,000 IU',
  indications: 'Infection caused by E. coli, Salmonella, Pseudomonas, and Enterobacter in calves, lambs, and poultry.',
  dosage: `The preparation is given orally in drinking water.
Poultry: 100 gm/500 L drinking water (1 gm/5 L) for 3-5 days.
Note: The medicated water should be used within 24 hours.`,
  image: 'https://i.postimg.cc/x11B23zF/Whats-App-Image-2025-06-10-at-20-03-33-c7ccd302.jpg',
},

  '30': {
  name: 'Bacitrix 50%',
  type: 'Antibiotic',
  composition: 'Each 1gm contains: Bacitracin methylene disalicylate 703.4 mg (equivalent to bacitracin base 500mg).',
  indications: 'Used in growing turkey, broiler chicken, and replacement chicken for the treatment of necrotic enteritis caused by Clostridium perfringens.',
  dosage: `Growing turkey: 21 mg/kg b.wt. (21 g of the product / 100 liters of drinking water once daily for 3-5 days)
Broiler chickens: 10.5-21 mg/kg b.wt. (10.5-21 g of the product / 100 liters of drinking water once daily for 3-5 days)`,
  contraindications: ['Not used in chickens producing eggs for human consumption.'],
  image: 'https://i.postimg.cc/tgt6NWrp/Whats-App-Image-2025-06-10-at-20-03-55-9af58e5f.jpg',
},

 '31': {
  name: 'Lincotinamycin',
  type: 'Antibiotic',
  composition: 'Each 150 g contains: Lincomycin hydrochloride 37.81 g (equivalent to lincomycin base 33.3 g), Spectinomycin hydrochloride 99.26 g (equivalent to spectinomycin base 66.6 g).',
  indications: 'Used for the treatment of airsacculitis caused by Mycoplasma gallisepticum and E. coli complicated with chronic respiratory diseases (CRD) in growing broiler chickens.',
  dosage: 'Young chickens: 75 mg of the product/kg body weight for 7 days (i.e. 750 mg/liter of drinking water).',
  withdrawalTime: 'Broiler chickens: 3 days',
  image: 'https://i.postimg.cc/zDRgxs2x/Whats-App-Image-2025-06-10-at-20-04-13-ea560559.jpg',
},

  '32': {
  name: 'Sulphavet',
  type: 'Antibiotic',
  composition: 'Each 100 g contains: Sulfadimidine Sodium 32.37 g (equivalent to Sulfadimidine base 30 g).',
  indications: `Broiler chickens: Infectious Coryza (Haemophilus gallinarum), Coccidiosis (Eimeria tenella, Eimeria necatrix), Acute Fowl Cholera (Pasteurella multocida), Pullorum disease (Salmonella pullorum).
Turkeys: Coccidiosis (Eimeria meleagrimitis, Eimeria adenoeides).`,
  dosage: `Broiler chickens & turkeys (non-laying and broilers): 3.33 g of product per 1 liter of drinking water.
For acute coccidiosis: Administer for 3 consecutive days, pause for 2 days, then repeat treatment for another 3 days.`,
  contraindications: [
    'Do not use in animals with serious liver and renal disturbances.',
    'Do not administer to laying hens.'
  ],
  withdrawalTime: 'Broiler chickens & turkeys: Meat - 10 days',
  image: 'https://i.postimg.cc/hGkSv58G/Whats-App-Image-2025-06-10-at-20-04-32-42be0a4c.jpg',
},

  '33': {
  name: 'COLIPRIM',
  type: 'Antibiotic',
  composition: 'Each 1 ml contains: Sulphadiazine sodium 400 mg (equivalent to 367.6 mg sulphadiazine).',
  indications: `COLIPRIM is indicated for the treatment of:
- Fowl cholera caused by Pasteurella multocida in broiler chickens.
- Pullorum disease caused by Salmonella pullorum in broiler chickens.
- Fowl typhoid caused by Salmonella gallinarum in broiler chickens.
- Colibacillosis caused by E. coli in broiler chickens.`,
  dosage: 'Broiler chickens and turkeys: 1 ml COLIPRIM per 32 kg body weight for 3-5 days.',
  withdrawalTime: 'Meat for broiler chickens and turkeys: 10 days',
  image: 'https://i.postimg.cc/8cswYt3h/Whats-App-Image-2025-06-10-at-20-04-45-cf3d673a.jpg',
},
};


const BirdAntibioticsDetailPage = () => {
  const { medicineId } = useParams<{ medicineId: string }>();
  const medicineData = medicinesData[medicineId];

  React.useEffect(() => {
    if (medicineData) {
      document.title = `VetCare | ${medicineData.name} Details`;
    } else {
      document.title = 'VetCare | Medicine Not Found';
    }
  }, [medicineData]);

  if (!medicineData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Medicine Not Found</h1>
          <Link to="/birds/medicines/category/antibiotics" className="mt-4 inline-block text-blue-500 underline">
            Back to Antibiotics Category
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen transparent-section py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="glass-effect rounded-lg overflow-hidden p-6">
          {/* Image on top */}
          {medicineData.image && (
  <div className="w-full flex justify-center mb-6">
    <img
      src={medicineData.image}
      alt={medicineData.name}
      className="object-contain rounded-md shadow-lg"
      style={{ maxWidth: '500px', maxHeight: '500px', width: 'auto', height: 'auto' }}
    />
            </div>
          )}

          {/* Medicine Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4 text-theme-deepsky text-center">{medicineData.name}</h1>

            {medicineData.type && (
              <p className="text-sm font-medium text-theme-deepsky mb-2 text-center">
                Type: <span className="text-gray-600">{medicineData.type}</span>
              </p>
            )}

            {medicineData.description && (
              <p className="text-gray-600 mb-6 text-center">{medicineData.description}</p>
            )}

            <div className="space-y-6">
              {medicineData.composition && (
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Composition</h2>
                  <p className="text-gray-600">{medicineData.composition}</p>
                </div>
              )}

              {medicineData.dosage && (
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Dosage</h2>
                  <p className="text-gray-600">{medicineData.dosage}</p>
                </div>
              )}

              {medicineData.indications && (
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Indications</h2>
                  <p className="text-gray-600">{medicineData.indications}</p>
                </div>
              )}

              {medicineData.contraindications && (
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Contraindications</h2>
                  <p className="text-gray-600">{medicineData.contraindications}</p>
                </div>
              )}

              {medicineData.sideEffects && (
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Side Effects</h2>
                  <p className="text-gray-600">{medicineData.sideEffects}</p>
                </div>
              )}

              {medicineData.withdrawalTime && (
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Withdrawal Time</h2>
                  <p className="text-gray-600">{medicineData.withdrawalTime}</p>
                </div>
              )}
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/birds/medicines/category/antibiotics"
                className="bg-vet-orange hover:bg-vet-darkorange text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Back to Antibiotics Category
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirdAntibioticsDetailPage;
