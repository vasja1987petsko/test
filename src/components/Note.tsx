import React, {memo} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';

import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import SmsIcon from '@mui/icons-material/Sms';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import DeleteIcon from '@mui/icons-material/Delete';

import { TimeBlock, IconWrapper, VerticalLine } from './CusomComponents'
import { INote, typeEnum, deleteNote} from '../store/notes/notesSlice';
import {RootState} from '../store';

const NoteWrapper = styled.div`
    position: relative;
    padding-top: 15px;
`
const NoteMesasage = styled.div`
    position: relative;
    padding: 20px;
    background: #dddddd;
`
export const TimeInfo = styled.div`
    position: absolute;
    top:20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
export const TimeValue = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const DeleteWrapper = styled(IconWrapper)`
    position: absolute;
    right: 20px;
    top: 10px;
`
const Autor = styled.span`
    color: blue;
    font-weight: bold;
`

const getIcon = (type: typeEnum)=> {
    switch (type){
        case typeEnum.PHONE: return <PhoneIcon/>
        case typeEnum.MESSAGE: return <SmsIcon/>
        case typeEnum.MEETING: return <PersonIcon/>
        case typeEnum.BEER: return <SportsBarIcon/>
        case typeEnum.COFFEE: return <LocalCafeIcon/>
    }
}

function Note({note}:{note: INote}) {
    console.log('render note', note); // for checking to rerenders
    const currentUser = useSelector((state: RootState) => state.notes.currentUser);
    const contact = useSelector((state: RootState) => state.notes.contact);
    const dispatch = useDispatch()

    return (
      <NoteWrapper>
          <TimeBlock>
              <VerticalLine/>
              <TimeInfo>
                  <TimeValue>
                      {new Date().getDate() - new Date(note.timestamp).getDate() + 'd'}
                  </TimeValue>
                  <IconWrapper>
                      {getIcon(note.type)}
                  </IconWrapper>
              </TimeInfo>
          </TimeBlock>
          <NoteMesasage>
              <div>
                  <Autor>{note.autor}</Autor> had a {note.type} with <Autor> {contact} </Autor>
              </div>
              <div>{note.noteText}</div>
              <DeleteWrapper onClick={() => {dispatch(deleteNote(note))}}>
                  <DeleteIcon/>
              </DeleteWrapper>
          </NoteMesasage>
      </NoteWrapper>
    );
}

export default memo(Note);
