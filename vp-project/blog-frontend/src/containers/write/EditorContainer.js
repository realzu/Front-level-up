import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize } from '../../modules/write';
import { useEffect } from 'react';
import Editor from '../../components/write/Editor';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }));

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );

  useEffect(() => {
    // 언마운트 시 초기화 (작성 중 나가면 초기화)
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return <Editor onChangeField={onChangeField} title={title} body={body} />;
};

export default EditorContainer;
