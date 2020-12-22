import React from 'react';
import { useParams } from 'react-router';
import { db } from '../firebase/firebase';

interface ParamTypes {
  recipeCategoryID: string;
}

export function DashboardContent() {
  const { recipeCategoryID } = useParams<ParamTypes>();
  console.log(recipeCategoryID);
  const writeUserData = (userId: string, name: string, category: string, imageUrl: string) => {
    console.log('add');
    db.ref('recipes/' + userId).set({
      username: name,
      category: category,
      profile_picture: imageUrl,
    });
  };
  return (
    <div>
      {recipeCategoryID === 'add' ? (
        <div>
          <button onClick={() => writeUserData('itAv3vHCu5XteaZ3sA2sI0JejmG3', 'blee', 'fishs', 'https://www.soups.sk')}>Send</button>
        </div>
      ) : (
        <h2>no</h2>
      )}
    </div>
  );
}

// cook = itAv3vHCu5XteaZ3sA2sI0JejmG3
// rover =  "UHRv2evrahYknu55FjDpzrb4xs73"
