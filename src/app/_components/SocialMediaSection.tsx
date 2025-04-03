'use client'

import { FloatingDock } from "@/components/ui/floating-dock"
import { LinkedinLogo, WhatsappLogo, Envelope, GithubLogo  } from "@phosphor-icons/react"



export function SocialMediaSection (){

    const floatingDockItems = [
        { title: "LinkedIn", icon: <LinkedinLogo className="h-full w-full text-neutral-500 dark:text-neutral-300"/>, href: "https://www.linkedin.com/in/vitor-gonçalves-de-oliveira-366355297" },
        { title: "WhatsApp", icon: <WhatsappLogo className="h-full w-full text-neutral-500 dark:text-neutral-300"/>, href: "https://wa.me/5541996564202?text=Opa%20vi%20seu%20reposit%C3%B3rio%20aqui%20e%20ficou%20uma%20beleza!" },
        { title: "E-mail", icon: <Envelope className="h-full w-full text-neutral-500 dark:text-neutral-300"/>, href: "vitorvitoroliveira92@hotmail.com" },
        { title: "GitHub", icon: <GithubLogo className="h-full w-full text-neutral-500 dark:text-neutral-300"/>, href: "https://github.com/14kgamers?tab=repositories" },
      ]

      
    return (
        <>
        <h1 className="text-center text-4xl">you can reach me in my social media</h1>
        <div className="flex items-center justify-center text-center mt-8 mb-8">
            <FloatingDock items={floatingDockItems} ></FloatingDock>
        </div>
        </>
    )
}