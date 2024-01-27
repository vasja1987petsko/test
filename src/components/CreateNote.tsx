import React, { useState, useRef, memo } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';

import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import SmsIcon from '@mui/icons-material/Sms';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import ListIcon from '@mui/icons-material/List';
import Button from '@mui/material/Button';

import { TimeBlock, VerticalLine,IconWrapper } from './CusomComponents'
import { typeEnum, createNote } from '../store/notes/notesSlice';
import {RootState} from "../store";

const NoteWrapper = styled.div`
    position: relative;
    margin-top: 20px;
    padding: 20px;
    background: #dddddd;
`

const Info = styled.div`
    padding-top: 10px;
    display: flex;
    justify-content: right;
    align-items: start;
`

const Input = styled.input`
    width: 100%;
`
const Textarea = styled.textarea<any>`
    height: 50px;
    width: 100%;
`

const TextareaBlock = styled.div`
    width: 100%;
`

const IconBlock = styled.div`
    display: flex;
    justify-content: flex-start;
`

const SmallIconWrapper = styled(IconWrapper)<any>`
    position:relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #fff;
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border: solid 1px ${(props:any) => props.active === 'true' ? '#00f': '#000'};
`

const ControulBlock = styled.div`
    display: flex;
    justify-content: space-between;
`

function CreateNote () {
    const noteRef = useRef(null);
    const [active, setActive]= useState(false);
    const [message, setMessage]= useState('');
    const [activeType, setActiveType]= useState(typeEnum.MESSAGE);
    const currentUser = useSelector((state: RootState) => state.notes.currentUser);
    const dispatch = useDispatch()

    console.log('render createNote'); // for checking to rerenders
    return (
        <NoteWrapper>
            <TimeBlock>
                <VerticalLine/>
                <Info>
                    <IconWrapper>
                        <ListIcon/>
                    </IconWrapper>
                </Info>
            </TimeBlock>
            {
                active ?
                <TextareaBlock>
                    <Textarea
                        placeholder={'Add a note with Millton Romaguera'}
                        value={message}
                        ref={noteRef}
                        onChange={(e: any) => setMessage(e.target.value)}

                    />
                    <ControulBlock>
                        <IconBlock>
                            <SmallIconWrapper
                                active={(activeType === typeEnum.MESSAGE).toString()}
                                onClick={() => setActiveType(typeEnum.MESSAGE)}
                            >
                                <SmsIcon/>
                            </SmallIconWrapper>
                            <SmallIconWrapper
                                active={(activeType === typeEnum.PHONE).toString()}
                                onClick={() => setActiveType(typeEnum.PHONE)}
                            >
                                <PhoneIcon/>
                            </SmallIconWrapper>
                            <SmallIconWrapper
                                active={(activeType === typeEnum.COFFEE).toString()}
                                onClick={() => setActiveType(typeEnum.COFFEE)}
                            >
                                <LocalCafeIcon/>
                            </SmallIconWrapper>
                            <SmallIconWrapper
                                active={(activeType === typeEnum.BEER).toString()}
                                onClick={() => setActiveType(typeEnum.BEER)}
                            >
                                <SportsBarIcon/>
                            </SmallIconWrapper>
                            <SmallIconWrapper
                                active={(activeType === typeEnum.MEETING).toString()}
                                onClick={() => setActiveType(typeEnum.MEETING)}
                            >
                                <PersonIcon/>
                            </SmallIconWrapper>
                        </IconBlock>
                        <Button
                            variant="contained"
                            size="small"
                            onClick={() => dispatch(
                                createNote({
                                    timestamp: new Date().toString(),
                                    autor: currentUser,
                                    type: activeType,
                                    noteText: message,
                                })
                            )}
                        >
                            Submit
                        </Button>
                    </ControulBlock>
                </TextareaBlock>
                :
                <Input
                    placeholder={'Add a note with Millton Romaguera'}
                    onClick={() => setActive(true)}
                />
            }
        </NoteWrapper>
    );
}

export default memo(CreateNote);
