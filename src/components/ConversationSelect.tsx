import { useRouter } from 'next/router'
import styled from 'styled-components'
import { useRecipient } from '../hooks/useRecipient'
import { Conversation } from '../types'
import RecipientAvatar from './RecipientAvatar'
import { Button, IconButton, Menu, MenuItem } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const StyledContainer = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	padding: 5px;
	word-break: break-all;
	justify-content: space-between;
	:hover {
		background-color: #e9eaeb;
	};
	border-radius: 50px;
`

const ConversationSelect = ({
	id,
	conversationUsers
}: {
	id: string
	conversationUsers: Conversation['users']
}) => {
	const { recipient, recipientEmail } = useRecipient(conversationUsers)

	const router = useRouter()

	const onSelectConversation = () => {
		router.push(`/conversations/${id}`)
	}


	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
	  setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
	  setAnchorEl(null);
	}



	return (
		<StyledContainer onClick={onSelectConversation}>
			<RecipientAvatar recipient={recipient} recipientEmail={recipientEmail} />
			<span>{recipientEmail}</span>
			<IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Pin Conversation</MenuItem>
        <MenuItem onClick={handleClose}>Storage</MenuItem>
        <MenuItem onClick={handleClose}>Delete Conversation</MenuItem>
      </Menu>
		</StyledContainer>
	)
}

export default ConversationSelect
