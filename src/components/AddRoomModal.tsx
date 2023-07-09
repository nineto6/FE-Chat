import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { TiDeleteOutline } from "react-icons/ti";

const Backgound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  position: absolute;
  top: 0%;
  left: 0%;

  background-color: black;
  opacity: 0.5;
`;

const ModalBox = styled.div`
  width: 300px;
  height: 200px;
  background-color: #e7e7bb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

const ModalForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    border: none;
    height: 30px;
    text-align: center;
  }

  button {
    border: none;
    height: 30px;
    text-align: center;
  }

  span {
    text-align: center;
  }
`;

interface IAddModalData {
  title: string;
  writerId: string;
  writerName: string;
}

export default function AddRoomModal({ setAddRoom }: any) {
  const {
    register,
    /*watch,*/ handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IAddModalData>();

  const onValid = async (data: IAddModalData) => {
    // closeModal();
  };

  const closeModal = () => {
    setAddRoom(false);
  };

  return (
    <>
      <Backgound>
        <TiDeleteOutline onClick={closeModal} size={48} color="white" />
        <ModalBox>
          <ModalForm onSubmit={handleSubmit(onValid)}>
            <input
              {...register("title", {
                required: "채팅방 제목을 작성해 주세요.",
                minLength: {
                  value: 2,
                  message: "제목이 너무 짧습니다.",
                },
              })}
              placeholder="채팅방 제목"
            />
            <button>확인</button>
            <span>{errors?.title?.message}</span>
          </ModalForm>
        </ModalBox>
      </Backgound>
    </>
  );
}
