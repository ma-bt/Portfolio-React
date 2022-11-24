import {  Col } from "react-bootstrap";


export const ProjectCard = ({ title, description, imgUrl,Lnk }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <a href={Lnk} className='text-decoration-none text-reset'> <button type="button" className="btn btn-light">{description}</button></a>
                </div>
            </div>
        </Col>
    )

}
export default ProjectCard;