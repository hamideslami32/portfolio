const ContactInformation = () => {
  return (
    <div className='flex flex-col gap-2'>
        <div className='flex gap-6 items-baseline'>
          <span className='text-4xl font-bold'>Hamid Eslami</span>
          <span className='text-2xl'>Frontend Software Engineer</span>
        </div>
        <div className="flex gap-4">
          <a className="underline text-blue-600" href="tel:+98-936-6182745">+98-936-6182745</a>
          <a className="underline text-blue-600" href="mailto:heslami32@gmail.com">heslami32@gmail.com</a>
          <a className="underline text-blue-600" target="_blank" href="https://github.com/hamideslami32">github.com/hamideslami32</a>
          <a className="underline text-blue-600" target="_blank" href="https://linkedin.com/in/hamid-eslami">linkedin.com/in/hamid-eslami</a>
        </div>
      </div>
  )
};

export default ContactInformation;
