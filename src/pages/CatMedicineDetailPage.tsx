import React from 'react';
import { useParams, Link } from 'react-router-dom';

const medicinesData: Record<string, any> = {
'1': {
  name: 'Meloxicam - Non-steroidal Veterinary Drug',
  type: 'Anti-Inflammatories',
  description: 'Inhibits cyclooxygenase (COX), mainly COX-2, reducing inflammation, pain, and fever.',
  features: [
    'Pain management',
    'Inflammation (especially in musculoskeletal disorders)',
    'Postoperative pain',
    'Osteoarthritis (dogs)',
    'Acute and chronic musculoskeletal disorders'
  ],
  Dosage: `
- Initial dose: 0.2 mg/kg orally on the first day
- Maintenance dose: 0.1 mg/kg orally once daily
- Injection (SC/IV): 0.2 mg/kg as a single dose`,
  benefits: 'Reduces inflammation, pain, and fever while supporting recovery in musculoskeletal disorders.',
  administrationForms: [
    'Oral Suspension',
    'Injectable solution (Subcutaneous, Intravenous)'
  ],
  sideEffects: [
    'Common: Vomiting, Diarrhea, Loss of appetite, Lethargy',
    'Serious (less common but urgent): GI ulceration/bleeding, Kidney or liver dysfunction, Increased thirst or urination, Jaundice'
  ],
  precautions: [
    'Use with caution in patients with a history of gastrointestinal bleeding or ulcers',
    'Monitor kidney and liver function during long-term use',
    'Avoid in patients with cardiovascular risk factors or heart disease'
  ],
  contraindications: [
    'Allergy to meloxicam or other NSAIDs',
    'Active gastrointestinal bleeding or peptic ulcer',
    'Severe renal or hepatic impairment'
  ],
  image: 'https://i.postimg.cc/Kj21YPsf/Meloxicam.png' ,
},

  '2': {
    name: 'Ketoprofen - Nonsteroidal Anti-inflammatory Drug (NSAID)',
    type: 'Anti-Inflammatories',
    description: `It inhibits the cyclooxygenase enzymes (COX-1 and COX-2), reducing the production of prostaglandins — chemicals responsible for inflammation, pain, and fever.
This leads to its anti-inflammatory, analgesic (pain-relieving), and antipyretic (fever-reducing) effects.`,
    Dosage: '1-2 mg/kg once or twice a day, depending on the severity of the condition.',
    benefits: 'Anti-inflammatory, analgesic (pain-relieving), and antipyretic (fever-reducing) effects.',
    image: 'https://i.postimg.cc/1zV0nKJ1/ketofen.jpg',
    administrationForms: ['Oral tablets', 'Injectable', 'Suspension'],
    sideEffects: [
      'Common: Gastrointestinal issues (vomiting, diarrhea, loss of appetite, ulcers)',
      'Common: Kidney and liver toxicity with prolonged use (monitoring advised)',
      'Common: Behavioral changes (lethargy or unusual behavior)',
      'Serious: Gastric ulceration or bleeding (long-term use risk)',
      'Serious: Renal failure (especially in dehydrated or compromised animals)'
    ],
    precautions: [
      'Use with caution in patients with kidney, liver, or heart problems',
      'Take with food or milk to reduce stomach irritation',
      'Avoid alcohol and other NSAIDs to prevent gastrointestinal bleeding'
    ],
    contraindications: [
      'Do not use in patients with active peptic ulcers or GI bleeding',
      'Contraindicated in individuals allergic to NSAIDs or aspirin',
      'Avoid during late pregnancy due to risk of fetal harm'
    ]
  },

  '3': {
    name: 'Alphachymotrypsin - Proteolytic Enzyme',
    type: 'Anti-Inflammatories',
    description: `Alpha-chymotrypsin is a serine protease that breaks down proteins by cleaving peptide bonds, especially at aromatic amino acids (tyrosine, phenylalanine, tryptophan).
It helps reduce inflammation, aid tissue repair, and decrease edema (swelling) in conditions like trauma or surgery.`,
    Dosage: '1-5 mg/kg',
    benefits: 'Reduces inflammation and swelling, supports tissue repair after trauma or surgery.',
    image: 'https://i.postimg.cc/NF2vZSxP/Picture5.png',
    administrationForms: ['Injectable form', 'Oral form'],
    sideEffects: [
      'Common: Injection site reactions (pain, swelling, or redness)',
      'Common: Gastrointestinal issues (vomiting or diarrhea)',
      'Common: Systemic effects like weakness or lethargy'
    ],
    precautions: [
      'Use with caution in patients with bleeding disorders',
      'Avoid contact with eyes and mucous membranes when using topically',
      'Monitor for allergic reactions in sensitive individuals'
    ],
    contraindications: [
      'Hypersensitivity to Alphachymotrypsin',
      'Presence of active bleeding or bleeding tendencies',
      'Recent surgery involving vital organs (e.g., brain, eyes)'
    ]
  },
 '4': {
  name: 'Carprofen - Nonsteroidal Anti-inflammatory Drug (NSAID)',
  type: 'Anti-Inflammatories',
  description: `Carprofen works by inhibiting cyclooxygenase (COX) enzymes, particularly COX-2, 
which reduces the production of prostaglandins—chemicals responsible for pain, inflammation, and fever. 
This leads to reduced pain and inflammation, especially in conditions like arthritis or post-surgery recovery.`,
  Dosage: `
- 2 mg/kg given once daily, but it may be given twice a day for more severe pain.`,
  benefits: 'Reduces pain and inflammation, particularly in arthritis or after surgery.',
  administrationForms: [
    'Chewable Tablets',
    'Injectable Form',
    'Oral Tablet'
  ],
  sideEffects: [
    'Common: Vomiting, Diarrhea, Decreased appetite, Lethargy',
    'Serious (rare): Kidney or liver damage (especially with prolonged use or in animals with pre-existing conditions), Gastrointestinal ulcers or bleeding, Skin reactions (rash, itching)'
  ],
  precautions: [
    'Use with caution in animals with liver, kidney, or heart problems',
    'Monitor for gastrointestinal issues like vomiting or diarrhea',
    'Regular blood work is recommended during long-term use'
  ],
  contraindications: [
    'Do not use in animals allergic to NSAIDs',
    'Avoid in pregnant, lactating, or breeding animals',
    'Not for use in animals with bleeding disorders or active ulcers'
  ],
  image: 'https://i.postimg.cc/4NzxdHz2/Picture6.jpg'
},
  '5': {
  name: 'Dexamethasone - Potent Corticosteroid',
  type: 'Anti-Inflammatories',
  description: `Dexamethasone works by binding to glucocorticoid receptors, leading to suppression of inflammation and immune responses.
It decreases the production of inflammatory cytokines, inhibits prostaglandin synthesis, and reduces immune cell activity, 
making it effective for treating allergies, autoimmune diseases, and inflammation.`,
  Dosage: `
- 0.1 – 0.3 mg/kg orally, IM, or IV (short-term use)
- Lower doses for long-term use`,
  benefits: 'Effective for managing inflammation, allergies, autoimmune diseases, and some cancers.',
  administrationForms: [
    'Tablets (oral)',
    'Injectable solution (IV, IM, SC)',
    'Ophthalmic and otic preparations (eye/ear drops)'
  ],
  sideEffects: [
    'Common: Increased thirst and urination, Increased appetite, Panting',
    'Long-term/high-dose: Immunosuppression, Muscle wasting, Delayed wound healing, Increased risk of infections, GI ulcers or bleeding, Behavioral changes, Iatrogenic Cushing’s disease'
  ],
  precautions: [
    'Use cautiously in patients with infections, as it may suppress immune response',
    'Monitor blood sugar levels in diabetics — it can cause hyperglycemia',
    'Long-term use may lead to osteoporosis and adrenal suppression'
  ],
  contraindications: [
    'Contraindicated in systemic fungal infections',
    'Avoid in patients with known hypersensitivity to dexamethasone',
    'Should not be used in those receiving live or live-attenuated vaccines'
  ],
  image: 'https://i.postimg.cc/jdrRGqGH/Picture7.png'
},
 '6': {
  name: 'Prednisolone - Synthetic Glucocorticoid (Corticosteroid)',
  type: 'Anti-Inflammatories',
  description: `Prednisolone works by binding to glucocorticoid receptors, leading to reduced inflammation and immune response.
It inhibits the production of inflammatory mediators like prostaglandins and cytokines, helping to control conditions such as allergies, asthma, and autoimmune diseases.`,
  Dosage: '0.5–1 mg/kg orally every 12–24 hours',
  benefits: 'Controls inflammation, suppresses overactive immune responses, and helps manage conditions like allergies, asthma, and autoimmune diseases.',
  administrationForms: [
    'Tablets (most common)',
    'Oral liquid',
    'Injectable solution',
    'Topical creams (for dermatologic use, less common systemically)'
  ],
  sideEffects: [
    'Common: Increased thirst and urination (PU/PD), Increased appetite, Panting (especially in dogs), Weight gain, Behavioral changes, GI upset (vomiting, diarrhea)',
    'Long-term/high-dose: Immune suppression, Muscle wasting, Thinning skin, Diabetes (especially in cats), Cushing’s disease, Delayed wound healing'
  ],
  precautions: [
    'May cause osteoporosis, glaucoma, or adrenal suppression with prolonged use',
    'Suppresses immune response, increasing infection risk',
    'Can raise blood sugar levels; monitor in diabetic patients'
  ],
  contraindications: [
    'Systemic fungal infections (can worsen due to immune suppression)',
    'Avoid live vaccines during treatment',
    'Contraindicated in patients allergic to prednisolone or other corticosteroids'
  ],
  image: 'https://i.postimg.cc/Mp9xM7X5/Picture9.jpg'
},
  '7': {
  name: 'Hydrocortisone - Natural Glucocorticoid (Corticosteroid)',
  type: 'Anti-Inflammatories',  
  description: `Hydrocortisone works by activating glucocorticoid receptors, leading to suppression of inflammation and immune responses.
It decreases the production of pro-inflammatory cytokines and inhibits prostaglandin synthesis, helping manage conditions like skin inflammation, allergies, and adrenal insufficiency.`,
  Dosage: ' 0.5–1.0 mg/kg every 12–24 hours',
  benefits: 'Manages inflammation, reduces allergic reactions, and helps treat adrenal insufficiency.',
  administrationForms: [
    'Topical creams, ointments, sprays',
    'Oral tablets (less common)',
    'Injectable solutions (for emergencies or systemic treatment)',
    'Otic drops (for ear infections)',
    'Ophthalmic solutions (for eye inflammation)'
  ],
  sideEffects: [
    'Topical: Skin thinning, Delayed wound healing, Increased risk of local infections, Hair loss at application site (prolonged use)',
    'Systemic: Increased thirst/urination (PU/PD), Increased appetite, Behavioral changes (restlessness, aggression)',
    'Systemic: Immune suppression, Vomiting/diarrhea (rare), Cushing-like symptoms (chronic use), Liver enzyme elevation (especially in dogs)'
  ],
  precautions: [
    'May cause osteoporosis, glaucoma, or adrenal suppression with prolonged use',
    'Suppresses immune response, increasing infection risk',
    'Can raise blood sugar levels; monitor in diabetic patients'
  ],
  contraindications: [
    'Systemic fungal infections (immune suppression risk)',
    'Avoid live vaccines during treatment',
    'Contraindicated in patients allergic to hydrocortisone or other corticosteroids'
  ],
  image: 'https://i.postimg.cc/XvXWwrCb/Picture10.jpg'
},
  '8': {
  name: 'Triamcinolone - Synthetic Glucocorticoid (Corticosteroid)',
  type: 'Anti-Inflammatories',  
  description: `Triamcinolone binds to glucocorticoid receptors, leading to suppression of inflammation and immune responses.
It reduces the production of pro-inflammatory cytokines, inhibits prostaglandins, and decreases immune cell activity, making it effective for treating allergies, skin conditions, arthritis, and asthma.`,
  Dosage: '0.005–0.1 mg/kg orally, IM, or SC (often once every 1–2 days or less frequently)',
  benefits: 'Controls inflammation, reduces allergic reactions, and manages autoimmune conditions.',
  administrationForms: [
    'Oral tablets (for long-term control)',
    'Injectable (IM/SC, long-acting depot form for acute issues)',
    'Topical sprays or creams (for localized skin conditions)'
  ],
  sideEffects: [
    'Short-term: Increased thirst/urination (PU/PD), Increased appetite, Behavioral changes (restlessness, aggression), GI upset (vomiting, diarrhea)',
    'Long-term: Immunosuppression (infection risk), Muscle wasting, Liver enlargement, Delayed wound healing',
    'Long-term: Diabetes mellitus (especially in cats), Iatrogenic Cushing’s disease (chronic use)'
  ],
  precautions: [
    'Use cautiously in patients with infections (immune suppression risk)',
    'Monitor blood sugar in diabetic patients',
    'Taper dosage gradually after long-term use to avoid adrenal suppression'
  ],
  contraindications: [
    'Systemic fungal infections',
    'Known hypersensitivity to corticosteroids or Triamcinolone',
    'Avoid live vaccines during treatment (immune suppression risk)'
  ],
  image: 'https://i.postimg.cc/xd72g9vb/Picture11.png'
},
 '9': {
  name: 'Drontal (Praziquantel + Pyrantel + Febantel)',
  type: 'Anti-parasitics: (Internal Parasites (Worms))',
  description: `Drontal is a broad-spectrum anthelmintic medication primarily used for deworming in pets (especially dogs and cats).
Praziquantel paralyzes and destroys the outer layer of flatworms (tapeworms).
Pyrantel pamoate targets roundworms and hookworms, paralyzing them and causing them to be expelled from the intestines.
Febantel interferes with the worm's metabolism and inhibits its ability to reproduce.`,
  Dosage: 'Administered orally as tablets or chewable tablets. Dosage depends on weight and species; follow veterinary guidance.',
  benefits: 'Effective against tapeworms, roundworms, hookworms, and whipworms. Easy to administer with minimal side effects.',
  administrationForms: [
    'Oral tablets',
    'Chewable tablets'
  ],
  sideEffects: [
    'Possible vomiting',
    'Diarrhea',
    'Lethargy'
  ],
  precautions: [
    'Use with caution in pregnant or lactating animals, especially during the first trimester',
    'Ensure accurate weight-based dosing to avoid underdosing or toxicity',
    'Monitor for side effects like vomiting, diarrhea, or lethargy, especially in sensitive pets'
  ],
  contraindications: [
    'Do not use in puppies or kittens under 2 weeks old or under 2 lbs (check product-specific label)',
    'Avoid in animals with known hypersensitivity to any of the active ingredients',
    'Not recommended for severely debilitated or sick animals unless directed by a vet'
  ],
  image: 'https://i.postimg.cc/15PZvCqM/Picture13.png'
},
  '10': {
  name: 'Milbemax (Milbemycin oxime + Praziquantel)',
  type: 'Anti-parasitics: (Internal Parasites (Worms))',
  description: `Milbemax combines two active ingredients for broad-spectrum deworming. 
Milbemycin oxime binds to glutamate-gated chloride channels in parasite nerve cells, causing hyperpolarization, paralysis, and death.
Praziquantel damages parasite cell membranes, causing muscle paralysis and structural disintegration, leading to immune elimination of the parasite.`,
  Dosage: 'Administered orally as tablets; dosage based on weight and species as prescribed by a veterinarian.',
  benefits: `✔️ Broad-spectrum efficacy against multiple types of internal parasites (worms).
✔️ Good safety profile for most pets.
✔️ Convenient single-dose administration.
❌ Not suitable for very young or pregnant pets in certain dosages.
❌ Possible side effects include vomiting, diarrhea, or loss of appetite.
❌ Requires precise weight-based dosing to avoid overdose, especially in small animals.`,
  administrationForms: [
    'Oral tablets'
  ],
  sideEffects: [
    'Vomiting',
    'Diarrhea',
    'Loss of appetite'
  ],
  precautions: [
    'Use with caution in breeds sensitive to avermectins (e.g., Collies)',
    'Ensure accurate dosing to avoid overdose',
    'Avoid in severely debilitated or underweight animals unless directed by a vet'
  ],
  contraindications: [
    'Do not use in puppies or kittens under the minimum recommended age/weight',
    'Contraindicated in animals with known hypersensitivity to any ingredient',
    'Avoid in animals with pre-existing liver or kidney issues without veterinary guidance'
  ],
  image: 'https://i.postimg.cc/htZWPK33/Picture14.jpg'
},
  '11': {
  name: 'Panacur (Fenbendazole)',
  type: 'Anti-parasitics: (Internal Parasites (Worms))',
  description: `Panacur contains fenbendazole, a broad-spectrum anthelmintic that inhibits tubulin polymerization into microtubules, disrupting parasite intestinal cell function.
This leads to nutrient absorption failure and parasite death. Effective against roundworms, hookworms, whipworms, and some tapeworms.`,
  Dosage: 'Administered orally via suspension, paste, granules, or tablets; dosage based on species and weight as prescribed by a veterinarian.',
  benefits: `✔️ Broad-spectrum efficacy against various intestinal worms.
✔️ High safety margin when used properly.
✔️ Multiple administration forms for easier dosing.
✔️ Low resistance risk compared to some other antiparasitics.
✔️ Effective in pets and livestock.
❌ May not be effective against all parasites (e.g., some tapeworms, fleas).
❌ Potential side effects include GI upset, lethargy, and allergic reactions.
❌ Overdose risk if not dosed correctly.`,
  administrationForms: [
    'Oral suspension',
    'Oral paste',
    'Oral granules',
    'Tablets'
  ],
  sideEffects: [
    'Vomiting',
    'Diarrhea',
    'Lethargy',
    'Rare allergic reactions'
  ],
  precautions: [
    'Use cautiously in pregnant or lactating animals due to limited safety data',
    'Ensure accurate weight-based dosing to avoid toxicity',
    'Monitor for adverse reactions such as GI upset during treatment'
  ],
  contraindications: [
    'Do not use in animals with known hypersensitivity to fenbendazole',
    'Avoid use in animals with liver or kidney diseases unless prescribed by a vet',
    'Not recommended for animals under 6 weeks of age'
  ],
  image: 'https://i.postimg.cc/HLMZDHGM/Picture16.jpg'
},
'12': {
  name: 'Albendazole (Local Brands)',
  type: 'Anti-parasitics: (Internal Parasites (Worms))',
  description: `Albendazole inhibits the polymerization of tubulin into microtubules in parasitic cells, disrupting their structure and metabolism, leading to parasite death.
It also impairs glucose uptake, starving and eliminating the parasite.`,
  Dosage: 'Administered orally as tablets (e.g., 200 mg, 400 mg) or suspension; dosage as prescribed by a veterinarian based on species and weight.',
  benefits: `✔️ Broad-spectrum activity against various internal parasites.
✔️ Single-dose treatment effective for many conditions.
✔️ Low cost compared to many antiparasitic drugs.
❌ Side effects may include stomach pain, nausea, vomiting, and headaches.
❌ Not safe during pregnancy, especially in the first trimester (risk of birth defects).
❌ Risk of resistance with overuse or improper use.`,
  administrationForms: [
    'Oral tablets (commonly 200 mg or 400 mg)',
    'Oral suspension (for those unable to swallow tablets)'
  ],
  sideEffects: [
    'Stomach pain',
    'Nausea',
    'Vomiting',
    'Headaches'
  ],
  precautions: [
    'Use with caution in animals with liver impairment (risk of liver toxicity)',
    'Avoid use during pregnancy, especially in the first trimester, unless absolutely necessary',
    'Monitor for drug interactions that may increase side effect risks (e.g., with cimetidine)'
  ],
  contraindications: [
    'Known hypersensitivity to albendazole or its components',
    'Severe liver impairment',
    'Pregnancy during the first trimester (teratogenic risk)'
  ],
  image: 'https://i.postimg.cc/KjGJMM17/Picture17.jpg'
},
 '13': {
  name: 'Metronidazole',
  type: 'Anti-parasitics: (Internal Parasites (Worms))',
  description: `Metronidazole disrupts DNA synthesis in anaerobic microorganisms.
It is reduced to reactive nitro radicals inside the microorganism, which bind to DNA, causing strand breakage and cell death.
It is effective mainly against anaerobic bacteria and protozoa.`,
  Dosage: `Amebiasis (Entamoeba histolytica): 500–750 mg orally every 8 hours for 7–10 days.
Giardiasis (Giardia lamblia): 250 mg orally every 8 hours for 5–7 days.
Trichomoniasis (Trichomonas vaginalis): Single dose of 2 g orally once.`,
  benefits: [ '✔️ Effective against anaerobic bacteria and protozoa.',
'✔️ Available in multiple formulations for different types of infections.',
'✔️ Cost-effective and widely accessible.',
'❌ May cause metallic taste, nausea, or headache.',
'❌ Alcohol use during treatment can cause severe disulfiram-like reaction (nausea, vomiting, flushing).',
'❌ Prolonged use may lead to peripheral neuropathy.'],
  administrationForms: [
    'Oral tablets or capsules (most common for systemic infections)',
    'Topical creams/gels (for skin or vaginal infections)',
    'Intravenous (IV) injection (for severe infections)',
    'Vaginal suppositories or gels (for Trichomonas or bacterial vaginosis)'
  ],
  sideEffects: [
    'Metallic taste',
    'Nausea',
    'Headache',
    'Peripheral neuropathy (with prolonged use)'
  ],
  precautions: [
    'Avoid alcohol during and 48 hours after treatment (disulfiram-like reaction risk)',
    'Use cautiously in patients with liver disease (hepatic metabolism)',
    'May interact with warfarin (increased bleeding risk)',
    'Monitor for peripheral neuropathy during long-term use'
  ],
  contraindications: [
    'Hypersensitivity to metronidazole or other nitroimidazoles',
    'First trimester of pregnancy (especially in high doses)',
    'Caution in CNS disorders (e.g., epilepsy) as it may worsen symptoms'
  ],
  image: 'https://i.postimg.cc/d35nmVCb/Picture18.jpg'
},
  '14': {
  name: 'Imidocarb dipropionate',
  type: 'Anti-parasitics: (Internal Parasites (Worms))',
  description: `Imidocarb interferes with nucleic acid metabolism of protozoa by binding to DNA, disrupting replication and transcription.
It may also inhibit polyamine synthesis, impairing parasite growth and viability.
It is particularly effective against Babesia spp. due to accumulation in infected erythrocytes.`,
  Dosage: `Cattle (Babesia): 1.2 mg/kg IM or SC (single dose).
Dogs (Babesia canis): 6.6 mg/kg IM or SC.
Horses (Babesia equi): 2.4 mg/kg IM or SC.
Always follow veterinary prescription.`,
  benefits:[ '✔️ Effective against Babesia spp. and other protozoa.',
'✔️ Single-dose treatments available for some species.',
'✔️ Long duration of action against certain infections.',
'❌ Pain at injection site common.',
'❌ Risk of cholinergic effects (e.g., salivation, vomiting).',
'❌ IV use highly toxic; overdose can be dangerous.',],
  administrationForms: [
    'Parenteral injection (IM or SC)',
    'Available as sterile solution for veterinary use'
  ],
  sideEffects: [
    'Pain at injection site',
    'Salivation',
    'Vomiting',
    'Rare: liver or kidney damage'
  ],
  precautions: [
    'Avoid intravenous use due to severe toxicity risk',
    'Do not mix with other drugs in the same syringe',
    'Use cautiously in animals with liver or kidney disease',
    'Monitor for cholinergic signs after administration'
  ],
  contraindications: [
    'IV administration (risk of severe adverse effects)',
    'Known hypersensitivity to imidocarb or related compounds',
    'Caution in pregnant animals (safety not fully established)',
    'Severe liver or kidney disease'
  ],
  image: 'https://i.postimg.cc/P5pKYh57/Picture33.png'
},
  '15': {
  name: 'Clindamycin',
  type: 'Anti-parasitics: (Internal Parasites (Worms))',
  description: `Clindamycin is a lincosamide antibiotic that inhibits protein synthesis in susceptible organisms.
It binds to the 50S ribosomal subunit, blocking translocation during protein synthesis.
In protozoa like Toxoplasma gondii and Plasmodium falciparum, it disrupts apicoplast function, leading to parasite death.`,
  Dosage: `Toxoplasmosis (adults): 300–450 mg orally every 6–8 hours (with pyrimethamine + folinic acid).
Malaria:
• Children: 20 mg/kg/day divided every 8 hours orally for 7 days.
• Adults: 450–600 mg orally every 8 hours for 7 days.`,
  benefits: ['✔️ Effective against Toxoplasma gondii and Plasmodium falciparum.',
'✔️ Available in multiple formulations for flexible administration.',
'✔️ Useful as part of combination therapy.',
'❌ Risk of Clostridioides difficile-associated diarrhea (CDAD).',
'❌ Possible hypersensitivity reactions (rash, anaphylaxis).',
'❌ Requires combination therapy for protozoal infections; not effective as monotherapy.'],
  administrationForms: [
    'Oral capsules or solution',
    'Intravenous injection (for severe infections)',
    'Topical forms (not for protozoal use)',
    'Vaginal forms (not for protozoal use in animals)'
  ],
  sideEffects: [
    'GI upset (nausea, vomiting, diarrhea)',
    'Risk of C. difficile-associated diarrhea',
    'Rash, itching, or other allergic reactions',
    'Rare: liver dysfunction, jaundice'
  ],
  precautions: [
    'Monitor liver and kidney function in long-term or high-dose therapy',
    'Caution in elderly or immunocompromised patients',
    'Avoid prolonged use to minimize resistance development',
    'Watch for signs of severe diarrhea (possible CDAD)'
  ],
  contraindications: [
    'Known hypersensitivity to clindamycin or lincomycin',
    'History of antibiotic-associated colitis',
    'Use caution in pregnancy; only if clearly needed',
    'Avoid in severe hepatic impairment unless necessary'
  ],
  image: 'https://i.postimg.cc/8kZbYsF3/Picture19.png'
},
 '16': {
  name: 'Itraconazole',
  type: 'Anti-fungals',
  description: `Itraconazole is an azole antifungal that inhibits the fungal cytochrome P450 enzyme (14α-demethylase).
This prevents the conversion of lanosterol to ergosterol, an essential component of the fungal cell membrane.
Disruption of ergosterol synthesis leads to increased membrane permeability and fungal cell death.`,
  Dosage: `Blastomycosis, histoplasmosis, aspergillosis: 200 mg once or twice daily (often for several months).
Always follow veterinary or medical prescription for specific species and conditions.`,
  benefits: `Broad-spectrum antifungal activity (effective against blastomycosis, histoplasmosis, aspergillosis, and others).
Available in multiple formulations (oral, IV).
Good option for long-term treatment of systemic mycoses.`,
  administrationForms: [
    'Oral capsules (best absorbed with food and acidic environment)',
    'Oral solution (better bioavailability; taken on empty stomach)',
    'Intravenous form (for hospitalized patients when oral is not possible)'
  ],
  sideEffects: [
    'GI upset (nausea, vomiting, diarrhea)',
    'Liver enzyme elevation or hepatotoxicity',
    'Edema, hypertension',
    'Rash or allergic reactions'
  ],
  precautions: [
    'Monitor liver function before and during treatment',
    'Use cautiously in patients with heart disease',
    'Check for drug interactions with medications metabolized by CYP3A4',
    'Avoid in pregnancy unless necessary for life-threatening infection'
  ],
  contraindications: [
    'Congestive heart failure (especially for onychomycosis)',
    'Known hypersensitivity to itraconazole',
    'Pregnancy (except in life-threatening infections)',
    'Co-administration with quinidine, dofetilide, ergot alkaloids, midazolam, triazolam'
  ],
  image: 'https://i.postimg.cc/MG07mG29/Picture20.jpg'
},
'17': {
  name: 'Ketoconazole',
  type: 'Anti-fungals',
  description: `Ketoconazole is an azole antifungal that inhibits lanosterol 14-α-demethylase (a cytochrome P450 enzyme),
blocking the conversion of lanosterol to ergosterol. This destabilizes the fungal cell membrane and leads to fungal cell death.`,
  Dosage: `Topical: 
Cream 2% — apply once or twice daily for 2–6 weeks depending on the infection type.
Shampoo 1%-2% — use twice weekly for 2-4 weeks, then once every 1–2 weeks for maintenance.`,
  benefits: `Effective for skin and scalp fungal infections (tinea, seborrheic dermatitis, dandruff). 
Available in various topical forms (cream, shampoo). 
Can be used long-term for maintenance. 
Cons: Oral form has significant liver toxicity risk, potential hormonal effects (e.g., gynecomastia), and many drug interactions.`,
  administrationForms: [
    'Topical creams (2%) for skin infections',
    'Shampoo (1%-2%) for scalp conditions',
    'Oral tablets (rarely used today due to safety concerns)'
  ],
  sideEffects: [
    'Topical: local irritation, burning, or rash',
    'Oral: liver toxicity, GI upset, hormonal disturbances (gynecomastia, menstrual irregularities)',
    'Potential for severe drug interactions (oral form)'
  ],
  precautions: [
    'Monitor liver function if oral form is used',
    'Avoid oral use in patients with liver disease',
    'Be cautious in patients using drugs metabolized by CYP3A4',
    'Oral absorption reduced by antacids or acid-reducing medications'
  ],
  contraindications: [
    'Active liver disease (oral use)',
    'Known hypersensitivity to ketoconazole',
    'Co-administration with certain drugs (e.g., cisapride, dofetilide, quinidine)',
    'Pregnancy (oral form — topical is safer but still used cautiously)'
  ],
  image: 'https://i.postimg.cc/rFv564qh/Picture21.png'
},
 '18': {
  name: 'Miconazole',
  type: 'Anti-fungals',
  description: `Miconazole is an imidazole antifungal that inhibits ergosterol synthesis,
a key component of fungal cell membranes. This disrupts membrane integrity, leading to increased permeability and fungal cell death.`,
  Dosage: `Topical: apply once or twice daily for 2–4 weeks (e.g., athlete’s foot, ringworm, candidiasis).
Vaginal: 
- 2% cream: 5g once daily at bedtime for 7 days.
- 4% cream: 5g once daily at bedtime for 3 days.
- 1200 mg ovule: single dose at bedtime.`,
  benefits: `Effective for various skin and mucosal fungal infections (e.g., athlete’s foot, candidiasis).
Available in multiple forms (topical cream, vaginal suppositories, powders).
Generally well-tolerated when used topically.
Cons: Risk of local irritation or rash; potential drug interactions (especially with warfarin); systemic absorption possible with prolonged use or use on broken skin.`,
  administrationForms: [
    'Topical creams, ointments, powders for skin infections',
    'Vaginal creams, suppositories, tablets for yeast infections'
  ],
  sideEffects: [
    'Local irritation, burning, or rash at application site',
    'Rare systemic effects if absorbed: headache, GI upset',
    'Potential for elevated levels of co-administered drugs (e.g., warfarin)'
  ],
  precautions: [
    'Avoid prolonged use on large or damaged skin areas to reduce risk of systemic absorption',
    'Use cautiously in pregnancy and breastfeeding (topical forms generally safe)',
    'Monitor patients on warfarin or other CYP2C9/CYP3A4-metabolized drugs'
  ],
  contraindications: [
    'Known hypersensitivity to miconazole or other imidazole antifungals',
    'Systemic use contraindicated with drugs highly dependent on CYP3A4/CYP2C9',
    'Avoid intravaginal use during the first trimester unless necessary'
  ],
  image: 'https://i.postimg.cc/hGC955vm/Picture23.png'
},
'19': {
  name: 'Clavamox (Amoxicillin + Clavulanic Acid)',
  type: 'Antibiotics / Amoxicillin',
  description: `Clavamox combines amoxicillin (a penicillin-type beta-lactam antibiotic) with clavulanic acid (a beta-lactamase inhibitor).
Amoxicillin inhibits bacterial cell wall synthesis, causing cell lysis and death.
Clavulanic acid protects amoxicillin from being broken down by beta-lactamase enzymes produced by resistant bacteria.`,
  Dosage: `6.25 mg per pound (13.75 mg/kg) of body weight, administered twice daily (every 12 hours). 
Exact dose and duration depend on the infection and veterinary guidance.`,
  benefits: `Effective against skin, gum, and urinary tract infections caused by beta-lactamase-producing bacteria.
Broad-spectrum activity covers many gram-positive and gram-negative bacteria.
Available in convenient forms for pets (tablets, oral drops).`,
  administrationForms: [
    'Oral tablets',
    'Oral suspension (drops)'
  ],
  sideEffects: [
    'Gastrointestinal upset (vomiting, diarrhea)',
    'Rare allergic reactions (rash, swelling, breathing difficulty)',
    'Occasional loss of appetite'
  ],
  precautions: [
    'Use cautiously in animals with known penicillin allergy',
    'Adjust dose in animals with significant kidney impairment',
    'Complete full course to prevent resistance'
  ],
  contraindications: [
    'Known hypersensitivity to amoxicillin, clavulanic acid, or other beta-lactam antibiotics'
  ],
  image: 'https://i.postimg.cc/C58kdMNC/Picture24.png'
},

'20': {
  name: 'Amoxi-Tabs / Amoxi-Drops',
  type: 'Antibiotics / Amoxicillin',
  description: `Amoxi-Tabs and Amoxi-Drops are amoxicillin-only formulations. 
Amoxicillin works by inhibiting bacterial cell wall synthesis, leading to cell lysis and death. 
These forms are commonly prescribed for infections where beta-lactamase resistance is not a concern.`,
  Dosage: `5–10 mg per pound (10–20 mg/kg) of body weight, every 12 to 24 hours depending on infection severity and veterinary prescription.`,
  benefits: `Used to treat respiratory infections (e.g., bronchitis, pneumonia), urinary tract infections, and certain skin infections.
Available in easy-to-administer tablets and oral drops for pets.`,
  administrationForms: [
    'Oral tablets (Amoxi-Tabs)',
    'Oral suspension (Amoxi-Drops)'
  ],
  sideEffects: [
    'Mild gastrointestinal upset (vomiting, diarrhea)',
    'Rare allergic reactions',
    'Occasionally drooling or changes in appetite'
  ],
  precautions: [
    'Use with caution in animals with penicillin allergy',
    'Dose adjustments may be needed in severe renal dysfunction',
    'Finish prescribed course to prevent bacterial resistance'
  ],
  contraindications: [
    'Known hypersensitivity to amoxicillin or other beta-lactam antibiotics'
  ],
  image: 'https://i.postimg.cc/cHp8qySv/Picture25.jpg'
},
 '21': {
  name: 'Ceftriaxone',
  type: 'Antibiotics',
  description: `Ceftriaxone is a broad-spectrum third-generation cephalosporin antibiotic used off-label in veterinary medicine, particularly for dogs and cats.
It works by inhibiting bacterial cell wall synthesis through binding to penicillin-binding proteins (PBPs), leading to disruption of the cell wall, cell lysis, and bacterial death.`,
  Dosage: `Dogs and Cats: 20–50 mg/kg once daily (IV or IM), depending on the severity of the infection and veterinary guidance.
Duration of therapy varies based on the type and severity of the infection.`,
  benefits: `Effective against a wide range of gram-positive and gram-negative bacteria.
Used for skin infections, urinary tract infections, respiratory infections, bone and joint infections, and sepsis.`,
  administrationForms: [
    'Intramuscular (IM) injection',
    'Intravenous (IV) injection'
  ],
  sideEffects: [
    'Gastrointestinal upset (diarrhea, nausea, vomiting, abdominal pain)',
    'Allergic reactions (rash, itching, fever, rare cases of anaphylaxis)',
    'Injection site pain, swelling, or inflammation'
  ],
  precautions: [
    'Use cautiously in animals with known beta-lactam antibiotic allergy',
    'Adjust dose in animals with significant renal impairment',
    'Monitor for signs of hypersensitivity reactions during treatment'
  ],
  contraindications: [
    'Known hypersensitivity to cephalosporins or penicillins'
  ],
  image: 'https://i.postimg.cc/x1184Tzs/Picture26.png'
},
'22': {
  name: 'Metronidazole',
  type: 'Antibiotics',
  description: `Metronidazole is a widely used antibiotic and antiprotozoal agent. It is effective against anaerobic bacteria and protozoa. 
It works by being reduced inside anaerobic cells to reactive nitro radicals, which damage DNA, inhibit nucleic acid synthesis, and cause cell death. 
It selectively targets organisms with nitroreductase enzymes (anaerobes and protozoa).
It has trade name of Flagyl (original brand by Sanofi).`,
  Dosage: `Dogs: 5–25 mg/kg per day, given every 12–24 hours as directed by a veterinarian.
Mild infections: 5–10 mg/kg every 12 hours.
Severe conditions (e.g., giardiasis, severe colitis): 15–25 mg/kg every 12–24 hours.`,
  benefits: `Used for treating giardiasis (intestinal parasite), anaerobic bacterial infections, inflammatory bowel disease (IBD), periodontal disease, liver infections (hepatic encephalopathy), and chronic diarrhea or colitis.`,
  administrationForms: [
    'Oral tablets',
    'Oral suspension',
    'Injectable form (for hospital use in severe cases)'
  ],
  sideEffects: [
    'Nausea',
    'Vomiting',
    'Metallic taste',
    'Diarrhea or abdominal discomfort',
    'Headache',
    'Dizziness',
    'Peripheral neuropathy (with long-term use)',
    'Seizures (rare)',
    'Rash',
    'Pruritus',
    'Urticaria'
  ],
  precautions: [
    'Use with caution in animals with liver disease (adjust dose as needed)',
    'Prolonged use increases risk of neurotoxicity',
    'Avoid use in pregnant or lactating animals unless essential',
    'Monitor for signs of neurological side effects with long-term use'
  ],
  contraindications: [
    'Known hypersensitivity to metronidazole',
    'Severe liver dysfunction (without dose adjustment and vet supervision)'
  ],
  image: 'https://i.postimg.cc/90BXLvF5/Picture27.jpg',
},
'23': {
  name: 'Baytril',
  type: 'Antibiotic / Enrofloxacin',
  description: `Baytril is the brand name for enrofloxacin, a fluoroquinolone antibiotic.
It works by inhibiting bacterial DNA gyrase and topoisomerase IV, enzymes necessary for DNA replication, transcription, and repair.
This leads to bacterial cell death, making it bactericidal (kills bacteria rather than just inhibiting growth).
It is widely used in dogs, cats, and other animals (including exotic species) for bacterial infections, especially when resistant to other antibiotics.
Common indications include urinary tract infections (UTIs), skin infections (pyoderma), respiratory tract infections, wound infections, ear infections (otitis externa), gastrointestinal infections, prostatitis, and infections caused by Pseudomonas, E. coli, Staphylococcus, and other gram-negative and gram-positive bacteria.
Baytril is not effective against anaerobic bacteria or fungi.`,
  Dosage: `Dogs: 5–20 mg/kg once daily. Example: a 20 kg dog might receive 100–200 mg per day.
Duration: typically 5–10 days, or longer for chronic infections.`,
  benefits: `Used to treat UTIs, skin infections, respiratory infections, wound infections, ear infections, gastrointestinal infections, prostatitis, and various infections caused by Pseudomonas, E. coli, Staphylococcus, and others.`,
  administrationForms: [
    'Oral tablets (flavored or unflavored)',
    'Injectable solution (subcutaneous or intramuscular)',
    'Topical (in ear drops, sometimes in combination products)'
  ],
  sideEffects: [
    'Vomiting',
    'Diarrhea',
    'Loss of appetite',
    'Lethargy',
    'Cartilage damage in young animals (especially dogs under 8 months)',
    'Retinal degeneration and blindness in cats at high doses',
    'Seizures (rare, mostly in pets with existing neurological conditions)',
    'Allergic reactions',
    'Rare liver or kidney issues (monitor in long-term use)'
  ],
  precautions: [
    'Avoid in pregnant or nursing animals',
    'Avoid in growing puppies (due to cartilage damage risk)',
    'Avoid high doses in cats (to prevent retinal toxicity)',
    'Use with caution in animals with existing neurological conditions'
  ],
  contraindications: [
    'Known hypersensitivity to fluoroquinolones',
    'Use in young growing animals (due to cartilage damage risk)',
    'Use in pregnant or lactating animals',
    'Use in cats at doses exceeding 5 mg/kg/day'
  ],
  image: 'https://i.postimg.cc/0NJ8T62C/Picture28.jpg'
},

'24': {
  name: 'Enroflox',
  type: 'Antibiotic / Enrofloxacin',
  description: `Enroflox is a brand or generic name for enrofloxacin, a fluoroquinolone antibiotic.
It inhibits bacterial DNA gyrase and topoisomerase IV — essential enzymes for DNA replication, transcription, and repair.
This leads to rapid bacterial cell death (bactericidal).
It is effective primarily against aerobic Gram-negative bacteria, and some Gram-positive bacteria.
Enroflox is used in dogs, cats, and sometimes exotic animals or livestock.
Common indications include skin infections (pyoderma, wounds), UTIs, respiratory infections, ear infections (otitis externa), gastrointestinal infections, bone and joint infections, prostatitis, and infections caused by E. coli, Klebsiella, Pasteurella, Staphylococcus, Pseudomonas, etc.
Not effective against anaerobic bacteria or fungal infections.`,
  Dosage: `Dogs: 5–20 mg/kg once daily depending on infection type/severity.
Duration: 5–10 days or longer for chronic infections.`,
  benefits: `Used to treat skin infections, UTIs, respiratory infections, ear infections, gastrointestinal infections, bone and joint infections, prostatitis, and various infections caused by susceptible bacteria.`,
  administrationForms: [
    'Oral tablets (various strengths, including flavored forms)',
    'Oral suspension',
    'Injectable solution (subcutaneous or intramuscular)',
    'Topical (in combination ear products)'
  ],
  sideEffects: [
    'Vomiting',
    'Diarrhea',
    'Decreased appetite',
    'Lethargy',
    'Retinal toxicity in cats (even at moderate doses >5 mg/kg/day)',
    'Seizures (rare, mostly in pets with seizure history)',
    'Cartilage damage in growing puppies',
    'Liver or kidney dysfunction (rare)',
    'Hypersensitivity reactions (hives, facial swelling)'
  ],
  precautions: [
    'Avoid use in young, pregnant, or lactating animals',
    'Caution in animals with seizure disorders',
    'Avoid doses over 5 mg/kg/day in cats to prevent retinal damage'
  ],
  contraindications: [
    'Known hypersensitivity to fluoroquinolones',
    'Use in young growing animals (due to cartilage damage risk)',
    'Use in pregnant or lactating animals',
    'High-dose use in cats (risk of retinal degeneration)'
  ],
  image: 'https://i.postimg.cc/pTb2R2mM/Picture29.jpg'
},
'25': {
  name: 'Cipromed',
  type: 'Antibiotic / Ciprofloxacin',
  description: `Cipromed contains ciprofloxacin, a fluoroquinolone antibiotic.
It inhibits bacterial enzymes: DNA gyrase and topoisomerase IV, which are essential for DNA replication, repair, and transcription.
Inhibition of these enzymes leads to bacterial DNA damage and cell death.
Ciprofloxacin is bactericidal, primarily targeting aerobic gram-negative bacteria, and some gram-positive bacteria.
Cipromed is primarily used in pets as an ophthalmic (eye drop) solution, though it may be prescribed off-label for other uses.`,
  Dosage: `For Eye Infections (Dogs & Cats): 1–2 drops into the affected eye(s) every 8–12 hours.
Duration: 5–10 days, or as prescribed.
Always complete the full course, even if symptoms improve.
❌ Not typically used orally in animals due to poor bioavailability and better veterinary alternatives (like enrofloxacin).

Ingredients (Eye Drops 0.3%):
- Active: Ciprofloxacin hydrochloride 0.3%
- Inactive: Benzalkonium chloride (preservative), Sodium chloride, Disodium edetate (EDTA), Hydrochloric acid/sodium hydroxide (pH adjusters), Purified water.`,
  benefits: `Used to treat conjunctivitis, blepharitis, keratitis, corneal ulcers, post-operative infections, and bacterial eye infections caused by Pseudomonas aeruginosa, Staphylococcus aureus, Escherichia coli, and others.`,
  administrationForms: [
    'Topical (ophthalmic eye drops)'
  ],
  sideEffects: [
    'Mild stinging or irritation',
    'Temporary blurred vision',
    'Increased tearing or ocular discharge',
    'Local allergic reactions (rare)',
    'Vomiting or diarrhea (in off-label oral use)',
    'Cartilage damage in growing puppies (oral)',
    'Possible neurotoxicity (high oral doses)',
    'Retinal toxicity (especially in cats, rare but serious)'
  ],
  precautions: [
    'Use with caution in young, growing animals (risk of cartilage damage if used orally)',
    'Avoid oral use unless prescribed by a vet',
    'Not FDA-approved for animals but used off-label in veterinary medicine'
  ],
  contraindications: [
    'Known hypersensitivity to ciprofloxacin or other fluoroquinolones',
    'Do not use orally in animals with seizure disorders or during rapid growth phases',
    'Avoid ophthalmic use if allergic reactions occur'
  ],
  image: 'https://i.postimg.cc/mgHJR7Ch/Picture30.jpg'
},
'26': {
  name: 'Ciprovet',
  type: 'Antibiotic / Ciprofloxacin',
  description: `Ciprovet contains ciprofloxacin, a fluoroquinolone antibiotic.
It inhibits bacterial DNA gyrase and topoisomerase IV, enzymes required for bacterial DNA replication, repair, and transcription.
This disruption leads to bacterial cell death. It is bactericidal and mainly effective against aerobic gram-negative bacteria and some gram-positive strains.
Ciprovet is primarily used in dogs and cats for treating bacterial eye infections, though oral ciprofloxacin may occasionally be used off-label.`,
  Dosage: `For Eye Drops (Dogs & Cats): Instill 1–2 drops into the affected eye(s) every 8–12 hours.
Duration: Typically 5–10 days depending on response.

Ingredients (Ciprovet Eye Drops):
- Active: Ciprofloxacin hydrochloride (usually 0.3%)
- Inactive: Benzalkonium chloride (preservative), Sodium chloride, Purified water, Buffered solution (for pH balance)

⚠ Oral ciprofloxacin is not commonly used in pets unless specifically prescribed. Alternatives like enrofloxacin are preferred.`,
  benefits: `Used to treat conjunctivitis, keratitis, blepharitis, corneal ulcers, post-surgical eye infections, and infectious inflammation of the eyelids and conjunctiva.
Off-label oral use may include UTIs, respiratory infections, and skin infections.`,
  administrationForms: [
    'Topical (ophthalmic eye drops)',
    'Oral tablets (rare off-label use)'
  ],
  sideEffects: [
    'Mild eye irritation',
    'Temporary blurred vision',
    'Increased tearing or discharge',
    'Redness',
    'Allergic reaction (rare)',
    'Vomiting (oral use)',
    'Diarrhea (oral use)',
    'Loss of appetite (oral use)',
    'Joint/cartilage damage in growing animals (oral)',
    'Retinal damage in cats (less common than enrofloxacin but possible)'
  ],
  precautions: [
    'Monitor for signs of local eye irritation or allergic reaction',
    'Use oral ciprofloxacin only under veterinary supervision',
    'Avoid oral use in young animals (due to cartilage damage risk)',
    'Use cautiously in cats (monitor for retinal side effects)'
  ],
  contraindications: [
    'Known hypersensitivity to ciprofloxacin or fluoroquinolones',
    'Avoid oral use in growing animals, pregnant or nursing pets unless absolutely necessary',
    'Do not continue use if ocular allergy symptoms persist'
  ],
  image: 'https://i.postimg.cc/0ynW9Zrk/Picture31.jpg'
},
'27': {
  name: 'Amiglyde-V',
  type: 'Antibiotic / Amikacin',
  description: `Amiglyde-V contains amikacin sulfate, an aminoglycoside antibiotic.
It works by binding irreversibly to the 30S ribosomal subunit of susceptible bacteria, inhibiting protein synthesis and producing faulty proteins, which leads to bacterial cell death.
Amikacin is bactericidal and effective primarily against aerobic Gram-negative bacteria and some Gram-positive strains.
It is typically reserved for serious infections that are resistant to other antibiotics.`,
  Dosage: `Dogs and Cats:
10–15 mg/kg body weight once daily via injection.
Alternatively, 5–7.5 mg/kg every 12 hours may be used depending on the severity of infection.
Duration: Typically 7–14 days based on infection and clinical response.

Ingredients:
- Active: Amikacin sulfate
- Inactive: May include sterile water for injection, stabilizers, and preservatives depending on the formulation.`,
  benefits: `Used for serious or resistant infections including:
- Severe urinary tract infections
- Respiratory infections
- Skin and soft tissue infections
- Bone and joint infections
- Post-surgical infections
- Infections caused by Pseudomonas, E. coli, Klebsiella, Proteus, Staphylococcus, and other resistant strains.`,
  administrationForms: [
    'Intramuscular (IM) injection',
    'Intravenous (IV) injection',
    'Occasionally subcutaneous (SC) injection'
  ],
  sideEffects: [
    'Pain or irritation at the injection site',
    'Mild allergic reactions (rare)',
    'Nephrotoxicity (kidney damage)',
    'Ototoxicity (hearing or balance issues)',
    'Neurological signs (rare)',
    'Muscle weakness (rare)'
  ],
  precautions: [
    'Monitor kidney function before and during treatment',
    'Avoid prolonged or high-dose therapy to reduce risk of nephrotoxicity and ototoxicity',
    'Adjust dosage in animals with renal impairment',
    'Use cautiously in older animals or those with pre-existing kidney conditions'
  ],
  contraindications: [
    'Known hypersensitivity to aminoglycosides',
    'Existing renal failure or significant kidney dysfunction (without dose adjustment)',
    'Concurrent use with other nephrotoxic or ototoxic drugs unless supervised closely by a veterinarian'
  ],
  image: 'https://i.postimg.cc/4NJpXGcc/Picture32.jpg'
},
'28': {
  name: 'Doxyvet',
  type: 'Antibiotic / Doxycycline',
  description: `Doxyvet contains doxycycline, a broad-spectrum tetracycline-class antibiotic.
It works by binding to the 30S ribosomal subunit in bacteria, preventing the addition of amino acids to the growing peptide chain and inhibiting protein synthesis.
This action is bacteriostatic—halting bacterial growth and replication without directly killing the organism.`,
  Dosage: `Dogs:
- Initial Dose: 1 mL per 22 lbs (10 kg) body weight on the first day.
- Maintenance Dose: 0.5 mL per 22 lbs every 12 hours.
- Duration: Typically 7–10 days or as directed by a veterinarian.

Ingredients:
- Active Ingredient: Doxycycline Hydrochloride (50 mg/mL)
- Formulation: Liquid, water-soluble solution suitable for oral administration.`,
  benefits: `Used in dogs and cats to treat:
- Skin infections (e.g., pyoderma, folliculitis)
- Respiratory infections
- Genitourinary infections
- Otitis externa and media
- Osteomyelitis
- Puerperal infections`,
  administrationForms: [
    'Oral liquid solution',
    'Can be given directly by syringe or mixed into food/drinking water'
  ],
  sideEffects: [
    'Gastrointestinal upset (vomiting, diarrhea, loss of appetite)',
    'Esophageal irritation or ulceration (especially in cats)',
    'Photosensitivity or sunburn (increased sensitivity to sunlight)',
    'Elevated liver enzymes (in some cases)'
  ],
  precautions: [
    'Administer with food to reduce GI upset',
    'Always follow tablets or capsules with water to avoid esophageal damage, especially in cats',
    'Avoid use in pregnant or young growing animals unless prescribed',
    'Monitor liver function with prolonged use or in animals with liver conditions'
  ],
  contraindications: [
    'Known hypersensitivity to tetracyclines',
    'Concurrent use with antacids or dairy products (reduces absorption)',
    'Caution in pregnant or nursing animals due to effects on developing bones and teeth'
  ],
  image: 'https://i.postimg.cc/1RYy3cnK/Whats-App-Image-2025-06-05-at-02-22-58-3763dc3f.jpg'
},
'29': {
  name: 'Doxyirobe',
  type: 'Antibiotic / Doxycycline + Metronidazole',
  description: `Doxyirobe typically combines doxycycline (a tetracycline antibiotic) with metronidazole or a similar antimicrobial agent. 
Doxycycline works by binding to the 30S ribosomal subunit in bacteria, inhibiting protein synthesis and exerting a bacteriostatic effect (stopping bacterial growth).
Metronidazole, if present, disrupts DNA synthesis in anaerobic bacteria and protozoa, resulting in a bactericidal effect.
This combination provides broad-spectrum antimicrobial coverage, targeting both aerobic and anaerobic bacteria.`,
  Dosage: `Dogs:
- Doxycycline: 5–10 mg/kg once or twice daily.
- Metronidazole (if included): 10–25 mg/kg twice daily.
- Formulation and route vary depending on infection type and veterinary direction.

Ingredients:
- Doxycycline hyclate (commonly in oral or gel form)
- Metronidazole or similar nitroimidazole compound
- Inactive excipients: flavoring agents, cellulose, lactose, stabilizers, or gel base for dental formulations.`,
  benefits: `Used in dogs and cats to treat:
- Periodontal disease
- Skin and soft tissue infections
- Respiratory infections
- Tick-borne diseases (e.g., ehrlichiosis, anaplasmosis)
- Gastrointestinal infections
- Wound and bone infections (as adjunct therapy)`,
  administrationForms: [
    'Oral tablets or capsules',
    'Oral suspension',
    'Topical dental gel (e.g., Doxyirobe Gel for periodontal pockets)'
  ],
  sideEffects: [
    'Nausea',
    'Vomiting',
    'Diarrhea',
    'Mild GI upset (especially when used long-term or at higher doses)'
  ],
  precautions: [
    'Avoid in pregnant or nursing animals unless directed by a veterinarian',
    'Administer tablets with water or food to reduce esophageal irritation, especially in cats',
    'Monitor for signs of GI upset or allergic reaction',
    'Adjust dose in animals with liver dysfunction (especially for metronidazole)'
  ],
  contraindications: [
    'Known hypersensitivity to tetracyclines or nitroimidazoles',
    'Caution in young animals (doxycycline may affect teeth and bone development)',
    'Avoid combining with antacids or dairy products (reduces doxycycline absorption)'
  ],
  image: 'https://i.postimg.cc/pXzVc5rY/Whats-App-Image-2025-06-05-at-02-25-45-46e92ed5.jpg'
},
'30': {
  name: 'Zyrtec',
  type: 'Antihistaminic / Cetirizine',
  description: `Zyrtec contains cetirizine hydrochloride, a second-generation antihistamine.
It works by selectively blocking histamine H1 receptors, reducing allergic symptoms such as itching, swelling, redness, and inflammation.
Unlike first-generation antihistamines (e.g., diphenhydramine), cetirizine has limited penetration of the blood-brain barrier, causing less sedation.`,
  Dosage: `Dogs:
- 0.5–1 mg/kg once daily
- Common dose: 5–10 mg per day depending on weight (e.g., 5 mg for small dogs, 10 mg for medium–large dogs)

Ingredients:
- Active: Cetirizine hydrochloride (typically 5 mg or 10 mg/tablet)
- Inactive: Lactose, cellulose, starch, magnesium stearate, hypromellose (coating agents)

⚠ Avoid using Zyrtec-D (contains pseudoephedrine, which is toxic to pets)`,
  benefits: `Used to manage allergic conditions in pets, including:
- Atopic dermatitis (skin allergies)
- Environmental allergies (dust, pollen)
- Food allergies (supportive role)
- Insect bite hypersensitivity
- Seasonal allergies
- Allergic rhinitis or conjunctivitis
- Urticaria (hives) and anaphylaxis recovery (adjunct treatment)`,
  administrationForms: [
    'Oral tablet (crushed or whole)',
    'Oral liquid (must not contain xylitol)'
  ],
  sideEffects: [
    'Mild drowsiness (less than first-generation antihistamines)',
    'Dry mouth',
    'Vomiting (rare)',
    'Diarrhea (rare)'
  ],
  precautions: [
    'Avoid Zyrtec-D (pseudoephedrine formulation) — toxic to pets',
    'Monitor for unusual sedation or GI signs',
    'Use under veterinary guidance, especially for long-term allergy control',
    'Check ingredients if using liquid formulations (avoid xylitol)'
  ],
  contraindications: [
    'Known hypersensitivity to cetirizine or hydroxyzine',
    'Do not use Zyrtec-D in animals',
    'Caution in animals with liver or kidney disease (dose adjustment may be required)'
  ],
  image: 'https://i.postimg.cc/XJB6Ztyc/Whats-App-Image-2025-06-05-at-02-35-22-25b67a3d.jpg'
},
'31': {
  name: 'Diphenhydramine',
  type: 'Antihistaminic / Diphenhydramine',
  description: `Diphenhydramine is a first-generation antihistamine that acts as a competitive H1 receptor antagonist, blocking the effects of histamine released during allergic reactions.
It also has anticholinergic and sedative properties due to its ability to cross the blood-brain barrier.
This results in reduced symptoms like itching, swelling, hives, and mild sedation.`,
  Dosage: `Dogs:
- 1–2 mg/kg every 8–12 hours
- Example: A 25 kg (55 lb) dog may receive 25–50 mg

Ingredients:
- Active: Diphenhydramine HCl
- Inactive (varies by brand):
  • Tablets: Lactose, starch, dyes (some may be unsuitable for pets)
  • Liquid: May contain xylitol, alcohol, or sugar — not safe unless vet-approved

> Always consult your vet before use. Avoid human liquid forms unless clearly pet-safe.`,
  benefits: `Used to manage allergic and inflammatory conditions, including:
- Insect bite or vaccine reactions
- Urticaria (hives)
- Itching and dermatitis
- Motion sickness or travel anxiety
- Mild sedation
- Anti-nausea
- Cough suppression (some respiratory cases)
- Pre-treatment before chemotherapy or vaccines`,
  administrationForms: [
    'Oral tablet (most common)',
    'Oral liquid (must be free of xylitol/alcohol)',
    'Injectable (SC or IM, in clinical settings)',
    'Topical cream (for mild localized reactions)'
  ],
  sideEffects: [
    'Drowsiness or sedation',
    'Dry mouth',
    'Urinary retention',
    'Mild gastrointestinal upset',
    'Hyperexcitability (especially in cats)',
    'Allergic reactions (rare)',
    'Rapid heart rate',
    'Agitation in sensitive animals'
  ],
  precautions: [
    'Use with caution in pets with glaucoma, heart disease, or urinary issues',
    'Monitor cats for hyperactivity or agitation',
    'Do not use liquid forms containing xylitol or alcohol',
    'Avoid prolonged use unless directed by a vet'
  ],
  contraindications: [
    'Known hypersensitivity to diphenhydramine',
    'Use of human liquid formulations with toxic ingredients',
    'Pets with pre-existing glaucoma, prostate disease, or seizure disorders without veterinary supervision'
  ],
  image: 'https://i.postimg.cc/y69z74K7/Whats-App-Image-2025-06-05-at-02-38-47-25d977e9.jpg'
},
'32': {
  name: 'Claritine',
  type: 'Antihistaminic / Loratadine',
  description: `Loratadine (commonly known by the brand name Claritin) is a second-generation antihistamine.
It works by selectively blocking histamine H₁ receptors, preventing histamine from binding during allergic reactions.
Unlike first-generation antihistamines (e.g., diphenhydramine), it does not readily cross the blood-brain barrier, resulting in less sedation.
It effectively reduces symptoms like itching, swelling, redness, and mild allergic responses.`,
  Dosage: `Dogs:
- 0.1–0.5 mg/kg once daily
- Common range: 5–10 mg once daily for medium to large dogs

Ingredients:
- Active: Loratadine (10 mg per tablet)
- Inactive (may vary): Lactose monohydrate, corn starch, magnesium stearate, cellulose

> ⚠ Avoid Claritin-D, which contains pseudoephedrine — toxic to pets.`,
  benefits: `Used off-label to treat mild to moderate allergic symptoms in pets:
- Environmental allergies (pollen, dust mites)
- Insect bite reactions
- Skin itching (pruritus)
- Mild allergic dermatitis
- Hives (urticaria)
- Post-vaccine allergic reactions
- Part of long-term management of atopic dermatitis`,
  administrationForms: [
    'Oral tablets (regular or chewable)',
    'Oral liquid (must be xylitol-free for pet use)'
  ],
  sideEffects: [
    'Lethargy or mild drowsiness (rare)',
    'Dry mouth',
    'Vomiting or diarrhea (rare)',
    'Hyperactivity (paradoxical, uncommon)',
    'Serious effects if accidentally given Claritin-D (with pseudoephedrine)'
  ],
  precautions: [
    'Do not use Claritin-D in pets — pseudoephedrine is highly toxic',
    'Always check for xylitol-free formulations when using liquid',
    'Not effective for severe allergic reactions or anaphylaxis',
    'Avoid long-term use without veterinary guidance'
  ],
  contraindications: [
    'Known allergy to loratadine or formulation components',
    'Use of Claritin-D (contains pseudoephedrine)',
    'Severe hepatic conditions (requires vet dose adjustment)',
    'Puppies or kittens without vet approval'
  ],
  image: 'https://i.postimg.cc/XJCtNFTs/Whats-App-Image-2025-06-05-at-02-41-14-0522cac1.jpg'
},
'33': {
  name: 'Chlor-Trimeton',
  type: 'Antihistaminic / Chlorpheniramine',
  description: `Chlorpheniramine (brand name Chlor-Trimeton®) is a first-generation H₁ antihistamine.
It works by competitively blocking histamine receptors, helping to reduce allergic symptoms like itching, redness, and swelling.
Although older than second-generation antihistamines, it's still used in veterinary medicine due to its effectiveness in mild to moderate allergic reactions.
It also has mild sedative and anticholinergic effects.`,
  Dosage: `Dogs:
- 4–8 mg every 8 hours, depending on size and vet guidance

> Always consult a veterinarian before beginning antihistamine therapy.`,
  benefits: `Used to treat allergic reactions in dogs:
- Itching and skin irritation
- Allergic dermatitis
- Insect bite hypersensitivity
- Hives (urticaria)
- Mild seasonal or environmental allergies`,
  administrationForms: [
    'Oral tablets',
    'Oral liquid (must be xylitol-free)',
    'Injectable (used in clinical settings)'
  ],
  sideEffects: [
    'Sedation or drowsiness',
    'Dry mouth',
    'Gastrointestinal upset (vomiting, diarrhea)',
    'Occasional hyperexcitability in cats or small dogs',
    'Urinary retention (rare)'
  ],
  precautions: [
    'Use with caution in older pets or those with urinary or prostate issues',
    'Avoid in pets with glaucoma or heart disease unless supervised by a vet',
    'Monitor for sedation or agitation, especially at first use',
    'Ensure liquid formulations are free of xylitol or alcohol'
  ],
  contraindications: [
    'Known hypersensitivity to chlorpheniramine or related compounds',
    'Use in animals with glaucoma or urinary retention conditions',
    'Do not combine with other CNS depressants without vet guidance',
    'Caution in animals with seizures or cardiovascular disorders'
  ],
  image: 'https://i.postimg.cc/HWbFfw0x/Whats-App-Image-2025-06-05-at-02-43-42-a521f8ad.jpg'
},
'34': {
  name: 'Atarax',
  type: 'Antihistaminic / Hydroxyzine',
  description: `Hydroxyzine (commonly sold under brand names like Atarax® or Vistaril®) is a first-generation H₁ antihistamine.
It functions by blocking histamine receptors, thus reducing allergic symptoms such as itching, swelling, and hives.
Hydroxyzine also has significant sedative, anxiolytic, and antiemetic properties, making it useful in both dermatologic and behavioral veterinary applications.`,
  Dosage: `Dogs and Cats:
- 2 mg/kg every 8 hours (or as prescribed)

> Hydroxyzine is available by prescription and should be dosed under veterinary guidance.
It is available in Egypt and other regions as a human-label medication, sometimes used off-label in pets.`,
  benefits: `- Manages severe pruritus (itching) due to allergic dermatitis
- Reduces symptoms of atopic dermatitis, insect bite hypersensitivity, and hives
- Acts as a mild sedative for anxiety-related symptoms or travel anxiety
- Adjunct for allergic reactions like urticaria and anaphylaxis recovery`,
  administrationForms: [
    'Oral tablets',
    'Oral suspension (if compounded)',
    'Injectable (primarily human-use, rarely used in pets)'
  ],
  sideEffects: [
    'Sedation or drowsiness',
    'Dry mouth',
    'Gastrointestinal upset (vomiting, diarrhea)',
    'Occasional agitation (especially in cats)',
    'Urinary retention (rare)'
  ],
  precautions: [
    'Use with caution in animals with glaucoma or urinary retention issues',
    'Monitor in pets with liver or kidney dysfunction',
    'May cause increased sedation if combined with other CNS depressants',
    'May affect older pets differently—start with lower doses if needed'
  ],
  contraindications: [
    'Known allergy to hydroxyzine or other antihistamines',
    'Do not use with MAO inhibitors',
    'Avoid in pregnant or lactating animals unless clearly needed',
    'Caution in pets with seizure disorders'
  ],
  image: 'https://i.postimg.cc/FsmwmYGx/Whats-App-Image-2025-06-05-at-02-45-03-76b25afd.jpg'
},
  '35': {
  name: 'Bromhexine hydrochloride',
  type: 'Mucolytics / Bromhexine',
  description: `Bromhexine hydrochloride is a mucolytic agent commonly used in veterinary medicine to assist with respiratory conditions.
It acts by depolymerizing mucopolysaccharide fibers in mucus, reducing its viscosity and aiding in its clearance from the respiratory tract.
It also stimulates ciliary activity in the airways, promoting expectoration and improving breathing efficiency.
In some cases, bromhexine enhances the penetration of antibiotics into bronchial secretions.`,
  Dosage: `Dogs:
0.5–1 mg/kg orally twice daily

> Always follow the veterinarian’s prescription regarding dose, frequency, and duration.
Formulations include palatable syrups or tablets, with flavoring and sweeteners such as sorbitol or sucrose.`,
  benefits: `- Helps manage respiratory tract infections with thick or sticky mucus
- Used in bronchitis, pneumonia, tracheitis, and sinusitis
- Supportive care for kennel cough
- Improves antibiotic efficacy in deep lung infections
- Aids mucus clearance post-surgery or during chronic respiratory illness`,
  administrationForms: [
    'Oral syrup (most common)',
    'Oral tablets',
    'Injectable solution (rarely used in pets, more in livestock)',
    'Nebulization (off-label use)'
  ],
  sideEffects: [
    'Mild gastrointestinal upset (nausea, vomiting)',
    'Rare allergic or hypersensitivity reactions'
  ],
  precautions: [
    'Use cautiously in pets with known gastrointestinal sensitivity',
    'Ensure adequate hydration to support mucus thinning',
    'Monitor for allergic reactions, especially on first use'
  ],
  contraindications: [
    'Known hypersensitivity to bromhexine or related compounds',
    'Use cautiously in pregnant or lactating animals unless prescribed'
  ],
  image: 'https://i.postimg.cc/nhSWv0xd/Whats-App-Image-2025-06-05-at-02-48-44-fe8436a0.jpg'
},
'36': {
  name: 'Taurians',
  type: 'Mucolytics / N acetylcysteine',
  description: `Taurine (2-aminoethanesulfonic acid) is a sulfur-containing amino acid that exists freely in animal tissues.
It plays a critical role in several physiological functions including:
- **Cardiac function**: Supports myocardial contractility and helps prevent dilated cardiomyopathy (DCM).
- **Retinal health**: Maintains photoreceptor cell function in the retina, preventing degeneration.
- **Neurological development**: Supports brain development and neurotransmission.
- **Bile acid conjugation**: Assists in fat digestion by forming bile salts.
- **Antioxidant activity**: Helps protect cells from oxidative stress.
Cats **cannot synthesize taurine** and require it from dietary sources, while some dog breeds may have reduced endogenous synthesis.`,
  Dosage: `Dosage should always be tailored by a veterinarian. General guidelines:
- Small Dogs: 500 mg once daily
- Medium Dogs: 1,000 mg once daily
- Large Dogs: 2,000 mg once daily

Taurine can be administered with or without food. If gastrointestinal discomfort occurs, giving it with food is advised.

Taurine is available in tablets, capsules, powders, or liquid forms. Pet food may also be fortified with taurine, especially feline diets.`,
  benefits: `- Prevents or manages breed-specific dilated cardiomyopathy (DCM), especially in Golden Retrievers, Newfoundlands, and Cocker Spaniels
- Provides general cardiac support in taurine-deficient dogs
- Essential for retinal maintenance and neurological health in cats
- Supports liver function and fat metabolism`,
  administrationForms: [
    'Oral tablets',
    'Oral capsules',
    'Oral powder (mixed with food)',
    'Liquid drops or solution',
    'Dietary inclusion in commercial pet food (especially cat food)'
  ],
  sideEffects: [
    'Mild gastrointestinal upset (vomiting or diarrhea – rare)'
  ],
  precautions: [
    'Use under veterinary supervision to determine appropriate dose',
    'Monitor pets with heart disease regularly during taurine supplementation',
    'Consult a vet before combining with other heart medications or supplements'
  ],
  contraindications: [
    'Known hypersensitivity to taurine (very rare)',
    'Avoid unnecessary supplementation in pets with normal taurine levels unless prescribed'
  ],
  image: 'https://i.postimg.cc/hv0yh0M1/Whats-App-Image-2025-06-05-at-02-52-18-c5a3963a.jpg'
},
  '37': {
  name: 'Mucomucil',
  type: 'Mucolytic / Carbocysteine',
  description: `Mucomucil® is a veterinary mucolytic syrup formulated with L-Carbocysteine.
It is used in the treatment of respiratory conditions in dogs and cats that involve thick or excessive mucus.
Each 100 mL contains 20 g of L-Carbocysteine. The syrup works by reducing mucus viscosity, promoting clearance of secretions, and improving breathing.
It is especially helpful in conditions involving **mucoid or mucopurulent secretions**, making it easier for pets to expel phlegm and reduce airway obstruction.`,
  Dosage: `- Dosage: 10 mg/kg of body weight
- Frequency: Twice daily
- Route: Oral
- Presentation: 50 mL bottle

Formulated and manufactured by **Vetnil**, this product is available in veterinary pharmacies and distributors across Egypt.`,
  benefits: `- Helps clear thick mucus from the respiratory tract
- Supports breathing in respiratory infections or chronic airway disease
- Reduces airway obstruction and enhances mucus drainage`,
  administrationForms: [
    'Oral syrup'
  ],
  sideEffects: [
    'Occasional gastrointestinal upset (vomiting or diarrhea)',
    'Hypersensitivity (rare)'
  ],
  precautions: [
    'Use with caution in animals with a history of gastrointestinal ulcers',
    'Ensure proper hydration to assist mucolytic activity',
    'Follow dosing guidelines strictly to avoid overdose'
  ],
  contraindications: [
    'Hypersensitivity to carbocysteine or any syrup excipients',
    'Do not use in animals with active peptic ulcers'
  ],
  image: 'https://i.postimg.cc/kgG1XKSW/Whats-App-Image-2025-06-05-at-02-55-10-638895b3.jpg'
},
  '38': {
  name: 'Ambroxol',
  type: 'Mucolytic / Ambroxol',
  description: `Ambroxol is a mucolytic agent used in veterinary medicine to manage respiratory conditions in dogs and cats.
It stimulates the production and release of surfactant in the respiratory tract, reducing the viscosity of mucus and enhancing its clearance.
Ambroxol also supports ciliary movement and has mild anti-inflammatory and antioxidant effects on the respiratory mucosa.
It is commonly used as a supportive treatment in bronchitis, pneumonia, tracheitis, and chronic respiratory disorders.`,
  Dosage: `- Oral Dose (Dogs & Cats): 1–3 mg/kg every 12 hours
- Duration: Typically 5–7 days or as directed by a veterinarian
- Route: Oral (tablets, capsules, syrups, solutions)
- Injectable form: Less commonly used in pets, but may be available for clinical use`,
  benefits: `- Reduces mucus thickness, facilitating easier expectoration
- Supports respiratory clearance and reduces coughing
- Aids recovery from bronchitis, tracheitis, and pneumonia
- Mild anti-inflammatory and antioxidant action on respiratory mucosa`,
  administrationForms: [
    'Oral tablets',
    'Oral syrups or solutions',
    'Injectable solution (rare use in pets)'
  ],
  sideEffects: [
    'Mild gastrointestinal upset (vomiting, diarrhea)',
    'Allergic reactions (rare)',
    'Hypersalivation (excess drooling)',
    'Drowsiness or lethargy (infrequent)'
  ],
  precautions: [
    'Use cautiously in pets with known gastrointestinal sensitivity',
    'Ensure adequate hydration to support mucolytic effects',
    'Monitor closely if used with other respiratory medications'
  ],
  contraindications: [
    'Known hypersensitivity to ambroxol or formulation components',
    'Use with caution in severely debilitated or dehydrated animals'
  ],
  image: 'https://i.postimg.cc/V6QDRhVF/Whats-App-Image-2025-06-05-at-02-58-10-206d2408.jpg'
},
'39': {
  name: 'Furosemide',
  type: 'Diuretic / Furosemide',
  description: `Furosemide is a loop diuretic commonly used in veterinary medicine to treat fluid accumulation and related conditions. 
It acts on the thick ascending limb of the loop of Henle in the kidney, inhibiting the sodium-potassium-chloride (Na⁺-K⁺-2Cl⁻) co-transporter. 
This action prevents reabsorption of sodium and chloride, resulting in increased excretion of sodium, chloride, potassium, and water.
The result is increased urine production, which helps reduce fluid overload in conditions such as congestive heart failure, pulmonary edema, and ascites.`,
  Dosage: `Dogs:
- Oral: 1–4 mg/kg every 8 to 12 hours
- Injectable (IV or IM): 1–2 mg/kg, repeated as needed
- Dose frequency and duration depend on the severity of the condition and clinical response.

Ingredients:
- Active: Furosemide
- Inactive (vary by form): Lactose, corn starch, magnesium stearate, water (for injectables), preservatives or stabilizers in liquids`,
  benefits: `- Reduces fluid buildup in the lungs and body
- Manages congestive heart failure and pulmonary edema
- Helps treat ascites, edema, and hypertension
- Can stimulate urine output in some kidney conditions`,
  administrationForms: [
    'Oral tablets',
    'Oral liquids',
    'Injectable solution (IV, IM, SC)'
  ],
  sideEffects: [
    'Increased urination (polyuria)',
    'Increased thirst (polydipsia)',
    'Dehydration',
    'Electrolyte imbalances (especially low potassium)',
    'Muscle weakness or arrhythmias from hypokalemia',
    'Ototoxicity (rare)',
    'Gastrointestinal upset (vomiting, diarrhea)',
    'Hypotension (low blood pressure)'
  ],
  precautions: [
    'Ensure adequate hydration during treatment',
    'Monitor electrolyte levels and kidney function regularly',
    'Avoid high doses in patients at risk of hearing damage',
    'Use cautiously with other nephrotoxic or ototoxic drugs'
  ],
  contraindications: [
    'Known hypersensitivity to furosemide or sulfonamides',
    'Severe dehydration or electrolyte imbalances',
    'Anuria (complete lack of urine production) without reversible cause'
  ],
  image: 'https://i.postimg.cc/x8g591Ts/Whats-App-Image-2025-06-05-at-03-02-44-e0827f14.jpg'
},
'40': {
  name: 'Spironolactone',
  type: 'Diuretic / Spironolactone',
  description: `Spironolactone is a potassium-sparing diuretic and aldosterone antagonist used in veterinary medicine. 
It works by blocking aldosterone receptors in the distal tubules of the kidneys, preventing sodium and water retention while promoting potassium conservation. 
This leads to increased urine output (diuresis) without potassium loss. 
It is especially useful in managing fluid overload and edema in conditions like congestive heart failure, liver disease, and hypertension.`,
  Dosage: `Dogs: 1–2 mg/kg orally once or twice daily.
Duration: Often used long-term in chronic conditions like heart failure.
Ingredients:
- Active: Spironolactone
- Inactive: Lactose, cellulose, and common binders or fillers depending on tablet formulation.`,
  benefits: `- Manages congestive heart failure
- Reduces ascites due to liver or cardiac causes
- Helps treat systemic hypertension
- Used in hyperaldosteronism and sometimes kidney disease`,
  administrationForms: [
    'Oral tablets',
    'Oral capsules'
  ],
  sideEffects: [
    'Increased urination',
    'Mild gastrointestinal upset (vomiting, diarrhea)',
    'Weakness or lethargy',
    'Hyperkalemia (high potassium levels)',
    'Electrolyte imbalances',
    'Dehydration',
    'Rare allergic reactions'
  ],
  precautions: [
    'Monitor blood potassium levels regularly',
    'Avoid combining with potassium supplements unless prescribed',
    'Regular kidney function tests recommended during prolonged use'
  ],
  contraindications: [
    'Known hypersensitivity to spironolactone',
    'Severe kidney dysfunction or anuria',
    'Hyperkalemia or high risk for potassium retention'
  ],
  image: 'https://i.postimg.cc/PrrK2Y20/Whats-App-Image-2025-06-05-at-03-04-21-40fd0ccf.jpg'
},
'41': {
  name: 'Hydrochlorothiazide',
  type: 'Diuretic / Thiazide',
  description: `Hydrochlorothiazide is a thiazide diuretic commonly used in veterinary medicine. 
It works by inhibiting the sodium-chloride symporter in the distal convoluted tubule of the kidney, promoting sodium and chloride excretion. 
Water follows sodium by osmosis, leading to increased urine output (diuresis). 
It also enhances potassium and magnesium excretion, helping reduce blood volume, lower blood pressure, and manage fluid overload.`,
  Dosage: `Dogs: 0.5–3 mg/kg orally every 12–24 hours depending on the condition and veterinary direction.
Ingredients:
- Active: Hydrochlorothiazide (may be combined with potassium-sparing agents in some formulations)
- Inactive: Varies depending on the manufacturer and tablet formulation.`,
  benefits: `- Used as adjunct treatment in congestive heart failure
- Helps manage hypertension (high blood pressure)
- Reduces edema associated with kidney, liver, or heart disease
- Occasionally used for calcium-containing urinary stones`,
  administrationForms: [
    'Oral tablets',
    'Oral capsules'
  ],
  sideEffects: [
    'Electrolyte imbalances (hypokalemia, hyponatremia)',
    'Increased urination and thirst',
    'Weakness or lethargy',
    'Gastrointestinal upset (vomiting, diarrhea)',
    'Dehydration (if over-diuresis occurs)',
    'Rare: pancreatitis or blood sugar changes (hyperglycemia)'
  ],
  precautions: [
    'Monitor electrolyte levels regularly',
    'Ensure adequate hydration during treatment',
    'Avoid use in severely dehydrated animals',
    'Use with caution in diabetic pets (may affect blood glucose)'
  ],
  contraindications: [
    'Known allergy to sulfonamides (thiazides are sulfa derivatives)',
    'Severe electrolyte imbalances',
    'Anuria (lack of urine production)',
    'Severe kidney or liver dysfunction without close monitoring'
  ],
  image: 'https://i.postimg.cc/qvNwd0fL/Whats-App-Image-2025-06-05-at-03-06-23-67b90662.jpg'
},
  '42': {
  name: 'Mannitol',
  type: 'Diuretic / Osmotic (Mannitol)',
  description: `Mannitol is a sugar alcohol osmotic diuretic used in emergency and critical care veterinary medicine. 
It increases the osmolarity of blood and renal filtrate, drawing water from tissues into the bloodstream. 
This promotes diuresis and reduces intracranial pressure (ICP) and intraocular pressure (IOP). 
It is especially useful in cases of brain edema, glaucoma, and acute kidney injury, and is excreted unchanged by the kidneys.`,
  Dosage: `Dogs and Cats: 0.5–1 g/kg IV over 15–30 minutes.
Repeat every 6–8 hours if needed, depending on the clinical condition and hydration status.
Ingredients:
- Active: Mannitol (typically 10%, 15%, or 20% aqueous solution)
- Inactive: Sterile water for injection; preservatives depending on brand`,
  benefits: `- Reduces intracranial pressure (e.g., brain trauma, edema)
- Lowers intraocular pressure in glaucoma emergencies
- Promotes diuresis in acute kidney injury and toxicities
- Helps assess renal function in diagnostic testing`,
  administrationForms: [
    'Intravenous (IV) injection or infusion'
  ],
  sideEffects: [
    'Electrolyte imbalances (e.g., sodium, potassium)',
    'Dehydration',
    'Hypovolemia (low blood volume)',
    'Pulmonary edema (especially in heart failure cases)',
    'Vomiting or diarrhea',
    'Rare: acute kidney injury in pre-existing renal disease'
  ],
  precautions: [
    'Monitor hydration and electrolytes regularly',
    'Use cautiously in patients with heart disease',
    'Administer slowly over 15–30 minutes to reduce adverse effects',
    'Avoid in anuric animals (no urine output)'
  ],
  contraindications: [
    'Severe dehydration',
    'Pulmonary edema or congestive heart failure',
    'Intracranial hemorrhage (may worsen condition)',
    'Anuria or severe kidney dysfunction without urine production'
  ],
  image: 'https://i.postimg.cc/ZnYPszF6/Whats-App-Image-2025-06-05-at-03-08-17-2a04b94c.jpg'
}

};

const CatMedicineDetailPage = () => {
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
          <Link to="/cats/medicines" className="mt-4 inline-block text-blue-500 underline">
            Back to Cat Medicines
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="glass-effect rounded-lg overflow-hidden p-6">
          {/* Image on top */}
          <div className="w-full flex justify-center mb-6">
            <img
              src={medicineData.image}
              alt={medicineData.name}
              className="w-full max-w-md object-contain rounded-md shadow-lg"
            />
          </div>

          {/* Medicine Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4 text-theme-deepsky text-center">{medicineData.name}</h1>

            {medicineData.type && (
              <p className="text-sm font-medium text-theme-deepsky mb-2 text-center">
                Type: <span className="text-gray-600">{medicineData.type}</span>
              </p>
            )}

            <p className="text-gray-600 mb-6 text-center">{medicineData.description}</p>

            <div className="space-y-6">
              {medicineData.Dosage && (
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Dosage</h2>
                  <p className="text-gray-600">{medicineData.Dosage}</p>
                </div>
              )}

              {medicineData.benefits && (
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Benefits</h2>
                  <p className="text-gray-600">{medicineData.benefits}</p>
                </div>
              )}

              {medicineData.features && (
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Features</h2>
                  <ul className="list-disc list-inside text-gray-600">
                    {medicineData.features.map((feature: string, index: number) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {medicineData.administrationForms && (
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Administration Forms</h2>
                  <ul className="list-disc list-inside text-gray-600">
                    {medicineData.administrationForms.map((form: string, index: number) => (
                      <li key={index}>{form}</li>
                    ))}
                  </ul>
                </div>
              )}

              {medicineData.sideEffects && (
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Side Effects</h2>
                  <ul className="list-disc list-inside text-gray-600">
                    {medicineData.sideEffects.map((effect: string, index: number) => (
                      <li key={index}>{effect}</li>
                    ))}
                  </ul>
                </div>
              )}

              {medicineData.precautions && (
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Precautions</h2>
                  <ul className="list-disc list-inside text-gray-600">
                    {medicineData.precautions.map((precaution: string, index: number) => (
                      <li key={index}>{precaution}</li>
                    ))}
                  </ul>
                </div>
              )}

              {medicineData.contraindications && (
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Contraindications</h2>
                  <ul className="list-disc list-inside text-gray-600">
                    {medicineData.contraindications.map((contra: string, index: number) => (
                      <li key={index}>{contra}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/cats/medicines"
                className="bg-vet-blue hover:bg-vet-darkblue text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Back to Cat Medicines
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatMedicineDetailPage;