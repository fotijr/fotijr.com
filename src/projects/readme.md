---
title: Projects
---

<h1>Projects</h1>
    <div class="project" v-for="project in projects">
        <h2>{{ project.name }}</h2>
        <div class="row info">
            <div class="col links">
                <div class="row">
                    <div class="col label">
                    Links
                    </div>
                    <div class="col">
                        <a v-for="link in project.links" :href="link.href" target="_blank">{{ link.text }}</a>
                    </div>
                </div>
            </div>
            <div class="col status">
                <strong>Status:</strong>
                <span class="status" :style="{ backgroundColor: project.status.color }">{{ project.status.text }}</span>
            </div>
        </div>
        <p v-for="paragraph in project.description.split('***')">{{ paragraph }}</p>
    </div>
</div>

<script>
import projects from './projects';
export default {
  data() {
    return {
      projects
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
    margin-bottom: 0;
}

.project{
    margin-bottom: 2.2em;
}

p{
    margin-top: 0.5em;
}

.col.label {
    font-weight: bold;
    flex-grow: 0;
    padding-right: 0;
}

.row.info{
    align-items: center;
}

div.links{
    .col {
        padding-top: 0;
        padding-bottom: 0;
    }

    a{
        margin-right: 1em;
    }
}

.col.status {
    display: block;
}

span.status{
    // display: inline-flex;
    border-radius: 10px;
    color: #fff;
    padding: 0.15em 0.4em;
    // margin-top: 0.3em;
}
</style>