import { firebase } from './config'

export function storeProjects(project) {
    firebase.database().ref('projects/').set(project)
}

export function indexProjects(setProject) {
    firebase.database().ref('projects/').on('value', (snapshot) => {
        const projects = snapshot.val();
        (projects === null) ? setProject([]) : setProject(projects)
    })
}