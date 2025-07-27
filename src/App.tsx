import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-primary">
              Figma Context MCP Practice
            </CardTitle>
            <CardDescription className="text-lg">
              Welcome to your React + Vite + TypeScript + Tailwind + shadcn/ui project!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <Button 
                onClick={() => setCount((count) => count + 1)}
                className="text-lg px-8 py-3"
              >
                Count is {count}
              </Button>
              <p className="text-muted-foreground text-center">
                Edit <code className="bg-muted px-2 py-1 rounded text-sm">src/App.tsx</code> and save to test HMR
              </p>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              Built with React, Vite, TypeScript, Tailwind CSS, and shadcn/ui
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App 