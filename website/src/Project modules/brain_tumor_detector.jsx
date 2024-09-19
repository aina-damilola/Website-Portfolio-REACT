import { Page } from "./template/page"

import "./template/template.css"

export function Brain_tumor_detector(){
    return(
        <Page img_link = "../project_images/brain_tumour.jpg" img_height = '33.75vw' img_width = '45vw' name = "Brain Tumor Detector" short = "Deep Learning aiding brain tumour recognition"

        descrip = {<div>This project involved developing a deep learning model to classify brain tumors using MRI scan images. We implemented a convolutional neural network (CNN) designed to detect and classify different types of brain tumors, specifically glioma, meningioma, and pituitary tumors, as well as identify when no tumor is present. The model aims to assist medical professionals by improving the speed and accuracy of brain tumor diagnosis.
        <br/><br/>
        The project utilized a CNN architecture due to its proficiency in image classification tasks. By preprocessing MRI scans and augmenting the data to account for variability in tumor size, shape, and location, the model was trained to distinguish between the four classes. The final model achieved an accuracy of over 96%, significantly improving upon the baseline model and demonstrating its potential for real-world medical applications.
        </div>} 
        
        skills = {<>
        <img className="icons" src="../skills_logos/Python.svg"/>
        <img className="icons" src="../skills_logos/Pytorch.svg"/>
        </>}
        
        usage = {<div>This brain tumor classification model takes MRI scans as input, processes them, and classifies the scan into one of four categories: glioma, meningioma, pituitary tumor, or no tumor. The model can be used in a clinical setting to support radiologists in identifying tumors more quickly and accurately. By providing a probability score for each class, it allows medical professionals to make more informed decisions about further diagnostics and treatments.
        <br/><br/>
        The model was trained on publicly available datasets from Kaggle and achieved a high recall rate, making it suitable for identifying the majority of brain tumor types with high confidence. Though further testing and validation are required before deployment in real-world medical environments, the model shows promise for supporting medical diagnoses and improving patient outcomes.
        </div>}
        
        vid = {<source src="../project_videos/Brain_Tumour.mp4" type="video/mp4" />}
        
        youtube = {<a target="_blank" href=""><img src="../misc_images/youtube-button.svg"/></a>}

        github = {<a target="_blank" href=""><img src="../misc_images/github-button.svg"/></a>}
        
        extra = {<div>The model was developed using PyTorch, leveraging CNN architectures such as a modified version of ResNet-18. Transfer learning techniques were used to adapt the pre-trained model for the specific task of brain tumor classification, which allowed for faster convergence and better accuracy. 
        <br/><br/>
        A comprehensive data preprocessing pipeline was implemented, including image resizing, grayscale conversion, and various data augmentations (such as rotation and blurring) to improve the model’s robustness. Additionally, cross-entropy loss was used for classification, and the Adam optimizer was employed to ensure efficient training.</div>}
        />
    )
} 


