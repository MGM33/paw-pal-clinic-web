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
  image: 'https://images.unsplash.com/photo-1601758123927-196c7e44e30c?w=600&h=400&fit=crop'
},

  '2': {
    name: 'Ketoprofen - Nonsteroidal Anti-inflammatory Drug (NSAID)',
    type: 'Anti-Inflammatories',
    description: `It inhibits the cyclooxygenase enzymes (COX-1 and COX-2), reducing the production of prostaglandins — chemicals responsible for inflammation, pain, and fever.
This leads to its anti-inflammatory, analgesic (pain-relieving), and antipyretic (fever-reducing) effects.`,
    Dosage: '1-2 mg/kg once or twice a day, depending on the severity of the condition.',
    benefits: 'Anti-inflammatory, analgesic (pain-relieving), and antipyretic (fever-reducing) effects.',
    image: 'https://images.unsplash.com/photo-1560743641-3914f2c45636?w=600&h=400&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1588776814546-ec7e40f96ecf?w=600&h=400&fit=crop',
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
  image: 'https://images.unsplash.com/photo-1601758123927-196c7e44e30c?w=600&h=400&fit=crop'
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
  image: 'https://images.unsplash.com/photo-1601758123927-196c7e44e30c?w=600&h=400&fit=crop'
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
  image: 'https://images.unsplash.com/photo-1601758123927-196c7e44e30c?w=600&h=400&fit=crop'
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
  image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
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
  image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
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
  image: 'https://images.unsplash.com/photo-1615461066841-bd5c02ca681f?w=600&h=400&fit=crop'
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
  image: 'https://images.unsplash.com/photo-1581091870632-7c81499e66e0?w=600&h=400&fit=crop'
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
  image: 'https://images.unsplash.com/photo-1606890737304-57f2b4e31cf2?w=600&h=400&fit=crop'
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
  image: 'https://images.unsplash.com/photo-1618498082410-1b63a5f43f5b?w=600&h=400&fit=crop'
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
  image: 'https://images.unsplash.com/photo-1597071117588-5df25f7d5047?w=600&h=400&fit=crop'
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
  image: 'https://images.unsplash.com/photo-1580281657527-47c796bb3120?w=600&h=400&fit=crop'
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
  image: 'https://images.unsplash.com/photo-1580281657527-47c796bb3120?w=600&h=400&fit=crop'
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
  image: 'https://images.unsplash.com/photo-1601758123927-1961b4172a8e?w=600&h=400&fit=crop'
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
  image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85d?w=600&h=400&fit=crop'
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
  image: 'https://images.unsplash.com/photo-1606925797307-3aa8c13f88fa?w=600&h=400&fit=crop'
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
  image: 'https://images.unsplash.com/photo-1580281658629-80d0ca5fdd29?w=600&h=400&fit=crop'
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
  image: 'https://images.unsplash.com/photo-1611175694981-7ff46fa9bb68?w=600&h=400&fit=crop'
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
  image: 'https://images.unsplash.com/photo-1603398938378-f4e0b4d21cf0?w=600&h=400&fit=crop'
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
  image: 'https://images.unsplash.com/photo-1597071341506-0d1f9d2ec1a5?w=600&h=400&fit=crop',
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
  image: 'https://images.unsplash.com/photo-1611741286785-1d38d01b4d1e?w=600&h=400&fit=crop'
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
  image: 'https://images.unsplash.com/photo-1611741286785-1d38d01b4d1e?w=600&h=400&fit=crop'
},
'25': {
  name: 'Dog Anti-Diarrhea Paste',
  description: 'Fast-acting paste to relieve diarrhea.',
  features: [
    'Soothes digestive tract',
    'Easy to administer',
    'Works within hours',
    'Suitable for all breeds',
    'Natural ingredients'
  ],
  usage: 'Give recommended dose based on weight twice daily.',
  ingredients: 'Kaolin, pectin, electrolytes.',
  benefits: 'Firm stools, rehydrates body.',
  image: 'https://images.unsplash.com/photo-1601758028271-3a68c54d9f27?w=600&h=400&fit=crop'
},
'26': {
  name: 'Dog Immune Booster - VitaPup',
  description: 'Vitamin blend for stronger immune defenses.',
  features: [
    'Rich in antioxidants',
    'Supports immune response',
    'Tasty chewable',
    'For all ages',
    'No added sugar'
  ],
  usage: 'One chew per day.',
  ingredients: 'Vitamin C, E, selenium, zinc.',
  benefits: 'Boosts immunity and general health.',
  image: 'https://images.unsplash.com/photo-1601758131186-79fc8fc1b90c?w=600&h=400&fit=crop'
},
'27': {
  name: 'Dog Hot Spot Spray',
  description: 'Soothing spray for itchy and irritated skin.',
  features: [
    'Reduces redness',
    'Promotes healing',
    'Alcohol-free',
    'Safe if licked',
    'Fast relief'
  ],
  usage: 'Spray directly on affected area 2-3 times daily.',
  ingredients: 'Aloe vera, tea tree oil, chamomile.',
  benefits: 'Calms itching and supports skin recovery.',
  image: 'https://images.unsplash.com/photo-1601758156657-99c72a3e9c2d?w=600&h=400&fit=crop'
},
'28': {
  name: 'Dog Liver Support Tablets',
  description: 'Herbal liver support for detox and health.',
  features: [
    'Milk thistle based',
    'Supports detox',
    'Easy-to-swallow tablets',
    'Natural ingredients',
    'For all sizes'
  ],
  usage: 'One tablet per 10kg once daily.',
  ingredients: 'Milk thistle, turmeric, dandelion root.',
  benefits: 'Promotes healthy liver function.',
  image: 'https://images.unsplash.com/photo-1601758097615-b2eb738e2c5a?w=600&h=400&fit=crop'
},
'29': {
  name: 'Dog Allergy Shampoo',
  description: 'Gentle shampoo for dogs with sensitive skin.',
  features: [
    'Hypoallergenic',
    'Soothes itching',
    'Fragrance-free',
    'Oatmeal-based',
    'pH balanced'
  ],
  usage: 'Lather and rinse thoroughly once weekly or as needed.',
  ingredients: 'Colloidal oatmeal, aloe vera, coconut extract.',
  benefits: 'Cleanses and calms irritated skin.',
  image: 'https://images.unsplash.com/photo-1601758180679-3b01b83515a9?w=600&h=400&fit=crop'
},
'30': {
  name: 'Dog Recovery Kit',
  description: 'Complete post-op care kit for dogs after surgery.',
  features: [
    'Includes pain relief',
    'Wound care ointment',
    'Antibiotic course',
    'Healing support supplement',
    'Vet-designed pack'
  ],
  usage: 'Use as directed by vet.',
  ingredients: 'Varies per product (NSAID, antibiotics, vitamins).',
  benefits: 'Speeds recovery, reduces complications.',
  image: 'https://images.unsplash.com/photo-1601758067804-6b876f5f5f03?w=600&h=400&fit=crop'
}
};

const DogMedicineDetailPage = () => {
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
          <Link to="/dogs/medicines" className="mt-4 inline-block text-blue-500 underline">
            Back to Dog Medicines
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={medicineData.image}
                  alt={medicineData.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:w-1/2 p-8">
                <h1 className="text-3xl font-bold mb-4 text-theme-deepsky">{medicineData.name}</h1>

                {medicineData.type && (
                  <p className="text-sm font-medium text-theme-deepsky mb-2">
                    Type: <span className="text-gray-600">{medicineData.type}</span>
                  </p>
                )}

                <p className="text-gray-600 mb-6">{medicineData.description}</p>

                <div className="space-y-4 mb-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Dosage</h2>
                    <p className="text-gray-600">{medicineData.Dosage}</p>
                  </div>

{/*                   <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Ingredients</h2>
                    <p className="text-gray-600">{medicineData.ingredients}</p>
                  </div> */}

                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Benefits</h2>
                    <p className="text-gray-600">{medicineData.benefits}</p>
                  </div>

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

                <Link
                  to="/dogs/medicines"
                  className="bg-vet-blue hover:bg-vet-darkblue text-white px-6 py-3 rounded-md font-semibold transition-colors inline-block"
                >
                  Back to Dog Medicines
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogMedicineDetailPage;

