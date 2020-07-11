import React, { useEffect, useState } from 'react'
import Board from 'react-trello'
import '../../app/style.css'

const Dashboard = ({ location }) => {
  const data = {
    lanes: [
      {
        id: 'lane1',
        title: 'Atividades',
        cards: [
          {
            id: 'Card1',
            title: 'Criar tela de Login',
            description: 'Te vira',
            label: '1 hora',
          },
          {
            id: 'Card2',
            title: 'Criar dashboard',
            description: 'Usar o react-trello',
            label: '3 horas',
            metadata: { sha: 'be312a1' },
          },
          {
            id: 'Card3',
            title: 'Criar chat',
            description: 'Te vira',
            label: '1 hora',
          },
          {
            id: 'Card4',
            title: 'Criar profile',
            description: 'Te vira',
            label: '1 hora',
          },
          {
            id: 'Card5',
            title: 'Rankin e pontuação',
            description: 'Te vira',
            label: '1 hora',
          },
        ],
      },
      {
        id: 'lane2',
        title: 'Em Andamento',
        cards: [],
      },
      {
        id: 'lane3',
        title: 'Completo',
        cards: [],
      },
    ],
  }

  return (
    <div>
      <Board
        data={data}
        style={{
          background:
            'linear-gradient(180deg, rgba(43,5,72,1) 0%, rgba(70,48,171,1) 42%, rgba(176,128,255,1) 100%)',
        }}
        editable={true}
        editLaneTitle={true}
        laneStyle={{ backgroundColor: '#fefefe' }}
        cardStyle={{ backgroundColor: '#ffff99' }}
      />
    </div>
  )
}

export default Dashboard
