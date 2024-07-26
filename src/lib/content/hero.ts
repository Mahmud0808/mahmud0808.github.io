import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: 'Hello, I’m',
    title: ['Mahmudul Hasan Khan', 'Android Developer', 'Web Developer', 'Full Stack Developer'],
    tagline: 'I code Android apps and design websites.',
    description:
    "I’m a Final Year Computer Science & Engineering student at Daffodil International University, focused on Android and Web Development. I enjoy learning new skills and building interactive apps. I’m eager to grow and work well with others to turn ideas into reality.",
    specialText: 'Currently available for job opportunities and freelance projects.',
    cta: {
        title: 'View My Resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};