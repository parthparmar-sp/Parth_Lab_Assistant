import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import demo from '@/assets/victory.svg'
import { Input } from '@/components/ui/input'

function Auth() {
  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center bg-gradient-to-r from-gray-900 to-teal-800'>
      <div className="h-[80vh] bg-white border-2 border-white shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2 overflow-hidden">
        

        <div className="flex flex-col gap-8 items-center justify-center bg-gradient-to-br from-gray-800 to-teal-700 text-white p-10">
          <div className="flex flex-col items-center">
            <h1 className='text-5xl font-bold md:text-6xl'>Welcome</h1>
            <img src={demo} alt="demo emoji" className='h-[100px] mt-4' />
          </div>
          <p className='font-medium text-lg text-center'>
         I am your personal computer lab astitant.
          </p>
        </div>

        <div className="flex flex-col items-start justify-start w-full p-10 space-y-6">
          <Tabs className="w-full">
            <TabsList className="flex justify-start w-full bg-gray-100 rounded-2xl p-2">
              <TabsTrigger value='login' className="w-1/2 p-3 rounded-2xl text-lg font-medium text-gray-700 transition-all duration-300 data-[state=active]:bg-blue-800 data-[state=active]:text-white">Login</TabsTrigger>
              <TabsTrigger value='admin_login' className="w-1/2 p-3 rounded-2xl text-lg font-medium text-gray-700 transition-all duration-300 data-[state=active]:bg-blue-800 data-[state=active]:text-white">Admin Login</TabsTrigger>
            </TabsList>

            <TabsContent value='login' className="space-y-4 mt-4">
              <Input placeholder='Enter Your Email' className="rounded-2xl p-4 border border-gray-300 focus:border-blue-800 focus:ring-2 focus:ring-blue-800 transition-all duration-300" />
              <Input placeholder="Enter Your Password" type="password" className='rounded-2xl p-4 border border-gray-300 focus:border-blue-800 focus:ring-2 focus:ring-blue-800 transition-all duration-300' />
              <button className="w-full mt-4 p-4 bg-blue-800 text-white rounded-2xl font-semibold hover:bg-blue-900 transition-all duration-300">Login</button>
            </TabsContent>

            <TabsContent value='admin_login' className="space-y-4 mt-4">
              <Input placeholder='Enter Your Email' className="rounded-2xl p-4 border border-gray-300 focus:border-blue-800 focus:ring-2 focus:ring-blue-800 transition-all duration-300" />
              <Input placeholder="Enter Your Password" type="password" className='rounded-2xl p-4 border border-gray-300 focus:border-blue-800 focus:ring-2 focus:ring-blue-800 transition-all duration-300' />
              <button className="w-full mt-4 p-4 bg-blue-800 text-white rounded-2xl font-semibold hover:bg-blue-900 transition-all duration-300">Admin Login</button>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div> 
  )
}

export default Auth
