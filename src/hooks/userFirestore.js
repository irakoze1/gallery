import {useState, useEffect} from 'react';
import {projectFirestore, projectStorage} from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDecos] = useState([]);

    useEffect(() =>{
      const unsub =  projectFirestore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})
            });
            setDecos(documents);
        });

        return () => unsub();

    }, [collection])

    return { docs };
}

export default useFirestore;