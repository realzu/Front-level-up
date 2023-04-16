import { useParams } from 'react-router-dom';

const data = {
  realzu: {
    name: '현주',
    description: '개발자',
  },
  zuzu: {
    name: '주주',
    description: '학생',
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name} </h2>
          <p>{profile.description} </p>
        </div>
      ) : (
        <p>존재하지 않는 프로필</p>
      )}
    </div>
  );
};

export default Profile;
