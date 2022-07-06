import React, { useState, useEffect } from "react";
import axios from 'axios';
import './FormationPlus.css';

function FormationPlus() {
    const [sending, setSending] = useState(false);
    const [data, setData] = useState([]);
    const [idEtudiant, setIdEtudiant] = useState('');
    const [idConvention, setIdConvention] = useState('');
    const [convention, setConvention] = useState('none');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setIdEtudiant(e.target.value)
    };

    const handleSubmit = async () => {
        if (idEtudiant && idConvention && message) {
            const attestation = {
                idEtudiant: idEtudiant,
                idConvention: idConvention,
                message: message
            }
            const options = {
                method: 'POST',
                headers: { 'content-type': 'application/JSON' },
                data: JSON.stringify(attestation),
                url: 'http://localhost:8000/attestation',
            };
            setSending(true);
            try {
                const res = await axios(options);
            } catch (error) {
                console.error(error.message);
            }
            setSending(false);
        }else{
            console.log('Choisir un étudiant')
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get('http://localhost:8000/etudiant');
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: etudiantResponse } = await axios.get(`http://localhost:8000/etudiant/${idEtudiant}`);
                setIdConvention(etudiantResponse.convention);
                const { data: conventionResponse } = await axios.get(`http://localhost:8000/convention/${etudiantResponse.convention}`);
                setConvention(conventionResponse.nom);
                if (etudiantResponse.nom && etudiantResponse.prenom && conventionResponse.nbHeur) {
                    setMessage(`Bonjour ${etudiantResponse.nom.replace(/\s+/g, '')} ${etudiantResponse.prenom.replace(/\s+/g, '')},\n\n\nVous avez suivi ${conventionResponse.nbHeur} de formation chez FormationPlus.\n\nPouvez-vous nous retourner ce mail avec la pièce jointe signée.\n\n\nCordialement,\n\nFormationPlus`);
                }
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, [idEtudiant])

    let options = data.map((etudiant) => (
        <option
            value={etudiant.idEtudiant}
            key={etudiant.idEtudiant}
        >
            {etudiant.nom + ' ' + etudiant.prenom}
        </option>))
    return (
        <>
            <h2>FormationPlus</h2>
            <div className="etudiant">
                <label htmlFor="etudiants">Nom Etudiant: </label>
                <select name="nom" id="etudiants" onChange={handleChange}>
                    <option disabled selected value> -- select an option -- </option>
                    {options}
                </select>
            </div>
            <div className="convention">
                <label htmlFor="convention">Convention: </label>
                <div id="convention">{convention}</div>
            </div>
            <textarea value={message}></textarea>
            <div></div>
            <button onClick={handleSubmit}>Envoyer Attestation</button>
            {sending && <div id="sending">Sending ...</div>}
        </>
    );
}

export default FormationPlus;