import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function AccordionTab({programDetails}) {
  return (
    <div className='accordion-tabs'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>
                    <div className='accordion-tabs-left'>
                        <span>The program</span>
                        <h2>{programDetails?.programTitle}</h2>
                        <p>{programDetails?.programBody}</p>
                    </div>
                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-7'>
                    <div className='accordion-tab-right'>
                        <Accordion defaultActiveKey={0}>
                            {programDetails?.programDetails?.map((item,index)=>(
                                <Accordion.Item eventKey={index} key={index}>
                                    <Accordion.Header>{item?.title}</Accordion.Header>
                                    <Accordion.Body>
                                    {item?.description}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
