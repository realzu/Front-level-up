import React from 'react';
import AskModal from '../components/common/AskModal';

const PostListPage = () => {
  return (
    <AskModal
      visible={true}
      title="포스트 삭제"
      description="정말 삭제하시겠습니까?"
    />
  );
};

export default PostListPage;
