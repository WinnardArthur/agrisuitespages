import React, { Component } from 'react'
import './style.css'
import Hero from '../../components/Hero/hero';
import Title from '../../components/TitleSection/title'
import Sidebar from '../../components/SideBar/sidebar';
import CommentsSection from '../../components/Comments/comment'
import GreenBar from '../../components/Green-bar/green-bar';
import Polygons from '../../components/Polygons/polygon';



class ShowPage extends Component {
    render(){
        return(
            <div className="showPage">
                <Hero/>
                <Title/>
                <div className="container">
                <div className="main" >
                    <div className="white-empty-div"></div>
                        <div className="blogArea">
                            <div>
                                <p className="text">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni repudiandae quis, voluptates voluptate sit exercitationem ducimus itaque iure eius maiores minima doloribus autem delectus? Magnam rerum necessitatibus ea et nihil laudantium numquam facere enim dolore, earum quod fugit odit, temporibus recusandae perspiciatis placeat dolorum nisi. Rerum, quos quae? Aut repellendus accusamus
                                iusto tempore nam labore adipisci esse dolorem corrupti qui, incidunt est odit quod libero odio inventore porro ducimus id placeat quidem? Impedit sunt nam blanditiis repellendus ipsam aspernatur quam earum incidunt non placeat ex perspiciatis consequuntur illum, quo molestiae itaque, quasi voluptates hic assumenda.
                                Autem ducimus non laudantium commodi velit, esse at ipsam, officiis placeat facilis, recusandae quisquam. Sapiente amet veritatis rem nesciunt voluptatem velit aperiam fugiat enim. Ipsam reiciendis dolore cumque quaerat eius excepturi dignissimos et blanditiis perferendis, possimus beatae nihil aut magni maxime!
                                A provident nisi nihil fugiat et ut tempore enim tempora, rerum incidunt! Vitae vero reprehenderit quas eligendi natus, quod laboriosam voluptatem atque dicta consequuntur, molestias possimus nihil a fuga maxime illum inventore harum cupiditate officia! Dolorem eligendi sit recusandae! Minus, animi!
                                Quae quos numquam magni praesentium voluptates odio consequuntur quam dolorum cum! Deserunt id est quod quaerat, voluptatem sint accusamus aut ratione laborum mollitia tempora? Dolores amet, explicabo magnam autem maxime minima, dolorem harum, omnis qui iste totam ipsa tempore et ut
                                </p>
                                <div className="imgContainer">
                                    <img src={require('../../assets/images/shapes_and_assets_folder/fruits-mixtures.jpeg')} alt="blog-image"/>
                                </div>
                                <h1>Image 1</h1>
                                <p className="text">
                                incidunt sed illo accusamus soluta. Veritatis enim eligendi quasi, facilis voluptatum dolore soluta sit nulla corrupti sequi beatae culpa, numquam, atque repellendus 
                                quod libero. Quia similique debitis assumenda, commodi ad error incidunt omnis delectus quas repellendus totam expedita cupiditate explicabo minus necessitatibus tenetur temporibus nesciunt facere aliquam 
                                accusantium inventore deleniti ex eaque iste! Tenetur ipsam minima praesentium voluptate, ad enim earum obcaecati molestias
                                reprehenderit nostrum fuga harum odit ab vel sequi voluptatem odio eaque, qui nisi laboriosam dicta? Maiores ipsum distinctio sunt.
                                </p>
                                <h5>Fri Jul 03 2020</h5>
                                <p class="submittedBy"><i>Submitted By jaden</i></p>
                            </div>
                        </div>
                    <Sidebar/>
                </div>
                <CommentsSection/>
                </div>
                <h2 className="info-header">Display a given service</h2>
                <GreenBar style={{marginBottom: "-3em"}}/>
                <Polygons/>
            </div>
        )
    }
 }


 
export default ShowPage