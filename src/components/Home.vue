<template>
    <q-layout ref="layout" view="hHr LpR lFf" :right-breakpoint="1100">
        <q-toolbar slot="header">
            <q-btn flat @click="$refs.layout.toggleLeft()">
                <q-icon name="menu"/>
            </q-btn>

            <q-toolbar-title>
                Layout Header
                <span slot="subtitle">Optional subtitle</span>
            </q-toolbar-title>
        </q-toolbar>

        <div slot="left">
            <q-list no-border link inset-separator>
                <q-list-header>Essential Links</q-list-header>

                <div
                    v-for="link in links"
                    :data-v-step="link.label"
                >
                    <q-side-link item :to="link.to">
                        <q-item-side :icon="link.icon"/>
                        <q-item-main :label="link.label" :sublabel="link.sublabel"/>
                    </q-side-link>
                </div>
            </q-list>
            <v-tour name="sampleTour" :steps="steps"/>
        </div>

        <router-view/>
    </q-layout>
</template>

<script>
    import {
        QLayout,
        QToolbar,
        QToolbarTitle,
        QList,
        QItem,
        QSideLink,
        QItemMain,
        QItemSide,
        QListHeader,
        QBtn,
        QIcon,
    } from 'quasar';

    export default {
        name: 'Home',

        components: {
            QLayout,
            QToolbar,
            QToolbarTitle,
            QList,
            QItem,
            QSideLink,
            QItemMain,
            QItemSide,
            QListHeader,
            QBtn,
            QIcon,
        },

        data() {
            return {
                links: [
                    {to: '/docs', icon: 'school', label: 'Docs', sublabel: 'quasar-framework.org'},
                    {to: '/forum', icon: 'record_voice_over', label: 'Forums', sublabel: 'forum.quasar-framework.org'},
                    {to: '/chat', icon: 'chat', label: 'Chat', sublabel: 'Quasar Lobby'},
                    {to: '/twitter', icon: 'rss feed', label: 'Twitter', sublabel: '@quasar-framework'},
                ],
                steps: [
                    {
                        target: '[data-v-step="Docs"]',
                        header: {
                            title: 'Docs'
                        },
                        content: 'This is the Docs page',
                        params: {
                            placement: 'left',
                        }
                    },
                    {
                        target: '[data-v-step="Forums"]',
                        header: {
                            title: 'Forums',
                        },
                        content: 'This is the Forums page',
                        params: {
                            placement: 'left',
                            preventOverflow: {
                                enabled: true,
                                boundariesElement: 'viewport',
                            }
                        }
                    },
                    {
                        target: '[data-v-step="Chat"]',
                        header: {
                            title: 'Chat',
                        },
                        content: 'This is the Chat page',
                    },
                    {
                        target: '[data-v-step="Twitter"]',
                        header: {
                            title: 'Twitter',
                        },
                        content: 'This is the Twitter page',
                    },
                ]
            };
        },

        mounted() {
            this.$tours.sampleTour.start();
        }
    };
</script>

<style>
</style>
