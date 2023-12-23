export type Experience = {
    href: string,
    startingDate: Date,
    endingDate?: Date,
    job: string,
    company: string,
    description: string
}

export default function CardExperience(experience: Experience) {
    return(
        <div>
            CardExperience
        </div>
    )
}